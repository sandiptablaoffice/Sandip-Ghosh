// Dynamic text configuration for Sandip Ghosh portfolio
const TEXT_STORAGE_PREFIX = 'sg_tabla_text_';

export interface DynamicTextSchema {
  name: string;
  subTitle1: string;
  subTitle2: string;
  tagline: string;
  alternativeTagline: string;
  
  // Gurukul details
  gurukulName: string;
  gurukulMentor: string;
  gurukulLocation: string;
  gurukulFocus: string;
  gurukulRecordingStudio: string;
}

export const DEFAULT_DYNAMIC_TEXTS: DynamicTextSchema = {
  name: 'Sandiip Kr Ghosh',
  subTitle1: 'Disciple of Pandit Anindo Chatterjee',
  subTitle2: 'Devotee and a learner of music',
  tagline: 'Rhythm Beyond Boundaries',
  alternativeTagline: 'Acquired and Absorbed Extensive Taleem of all Respected Gharanas',
  
  // Gurukul
  gurukulName: 'DHA Esthetics Music Gurukul',
  gurukulMentor: 'Sandiip Kr Ghosh',
  gurukulLocation: '16B, Paikpara Row, Kolkata, West Bengal 700037 (Landmark: DumDum Metro, between Shyambazar and DumDum)',
  gurukulFocus: 'Indian classical music, dynamic tabla rhythm training, basic audio / VDO recording guidance, and guidance of core tabla technique & aesthetics.',
  gurukulRecordingStudio: 'DHA Esthetics Studio - professional on-site recording setup'
};

export function getDynamicTextValue<K extends keyof DynamicTextSchema>(key: K): string {
  const stored = localStorage.getItem(`${TEXT_STORAGE_PREFIX}${key}`);
  return stored !== null ? stored : DEFAULT_DYNAMIC_TEXTS[key];
}

export function saveDynamicTextValue<K extends keyof DynamicTextSchema>(key: K, value: string) {
  localStorage.setItem(`${TEXT_STORAGE_PREFIX}${key}`, value);
  // Broadcast live update
  const event = new CustomEvent('sg-text-cache-updated', {
    detail: { key, value }
  });
  window.dispatchEvent(event);
}

export function resetAllDynamicTexts() {
  Object.keys(DEFAULT_DYNAMIC_TEXTS).forEach(key => {
    localStorage.removeItem(`${TEXT_STORAGE_PREFIX}${key}`);
  });
  window.dispatchEvent(new CustomEvent('sg-text-cache-updated', { detail: { reset: true } }));
}
