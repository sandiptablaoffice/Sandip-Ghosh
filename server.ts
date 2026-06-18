import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Set high upload size limits since images are synced as Base64 strings
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // API to save sandbox images as physical files in public/assets/
  app.post("/api/sync-sandbox-images", async (req, res) => {
    try {
      const { imageKey, base64Data } = req.body;
      if (!imageKey || !base64Data) {
        return res.status(400).json({ error: "Missing imageKey or base64Data" });
      }

      // Extract raw base64 buffer from the data URL scheme (e.g. "data:image/jpeg;base64,...")
      const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        return res.status(400).json({ error: "Invalid base64 payload scheme" });
      }

      const buffer = Buffer.from(matches[2], "base64");
      
      const publicAssetsDir = path.join(process.cwd(), "public", "assets");
      const rootAssetsDir = path.join(process.cwd(), "assets");

      // Ensure folders exist recursively
      fs.mkdirSync(publicAssetsDir, { recursive: true });
      fs.mkdirSync(rootAssetsDir, { recursive: true });

      // Write both to public/assets/ (for local dev server mapping)
      const targetPublicPath = path.join(publicAssetsDir, `${imageKey}.jpg`);
      fs.writeFileSync(targetPublicPath, buffer);

      // Write to root/assets/ too for robust redundancy
      const targetRootPath = path.join(rootAssetsDir, `${imageKey}.jpg`);
      fs.writeFileSync(targetRootPath, buffer);

      console.log(`[SANDBOX-SERVER] Successfully synced image [${imageKey}] to filesystem!`);
      return res.json({ 
        success: true, 
        imageKey,
        path: `/assets/${imageKey}.jpg`
      });
    } catch (err: any) {
      console.error("[SANDBOX-SERVER] Error syncing image:", err);
      return res.status(500).json({ error: err.message });
    }
  });

  // API to delete synced images from the filesystem
  app.post("/api/delete-sandbox-image", async (req, res) => {
    try {
      const { imageKey } = req.body;
      if (!imageKey) {
        return res.status(400).json({ error: "Missing imageKey" });
      }

      const targetPublicPath = path.join(process.cwd(), "public", "assets", `${imageKey}.jpg`);
      const targetRootPath = path.join(process.cwd(), "assets", `${imageKey}.jpg`);

      let deleted = false;
      if (fs.existsSync(targetPublicPath)) {
        fs.unlinkSync(targetPublicPath);
        deleted = true;
      }
      if (fs.existsSync(targetRootPath)) {
        fs.unlinkSync(targetRootPath);
        deleted = true;
      }

      console.log(`[SANDBOX-SERVER] Deleted image files for [${imageKey}]`);
      return res.json({ success: true, deleted });
    } catch (err: any) {
      console.error("[SANDBOX-SERVER] Error deleting image:", err);
      return res.status(500).json({ error: err.message });
    }
  });

  // Serve the assets directory dynamically (for loaded/uploaded sandbox images)
  app.use("/assets", express.static(path.join(process.cwd(), "public", "assets")));
  app.use("/assets", express.static(path.join(process.cwd(), "assets")));

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // production static hosting setup
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SANDBOX-SERVER] Server running on http://localhost:${PORT} [ENV: ${process.env.NODE_ENV || "development"}]`);
  });
}

startServer();
