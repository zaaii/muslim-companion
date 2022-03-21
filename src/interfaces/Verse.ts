import { TranslationObject } from './General';

export interface VerseMeta {
  juz: number,
  page: number,
  manzil: number,
  ruku: number,
  hizbQuarter: number,
  sajda: {
    recommended: boolean,
    obligatory: boolean
  }
}

export interface VerseText {
  arab: string;
  transliteration: TranslationObject,
}

export interface VerseAudio {
  primary: string,
  secondary: string[];
}

export interface Verse {
  number: {
    inQuran: number,
    inSurah: number
  },
  meta: VerseMeta,
  text: VerseText,
  translation: TranslationObject,
  audio: VerseAudio,
  tafsir: {
    id: {
      short: string;
      long: string;
    }
  }
}