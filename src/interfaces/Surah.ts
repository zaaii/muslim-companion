import { TranslationObject } from './General';
import { Verse } from './Verse';

export interface SurahName {
  short: string,
  long:string,
  transliteration: TranslationObject,
  translation: TranslationObject
}

export interface Surah {
  number: number,
  sequence: number,
  numberOfVerses: number,
  name: SurahName,
  revelation: TranslationObject,
  tafsir: TranslationObject,
};


export interface SurahDetails extends Surah {
  preBismillah: string | null,
  verses: Verse[],
}