import { atomWithStorage } from 'jotai/utils';

import { Surah } from '../interfaces/Surah';
import { Verse } from '../interfaces/Verse';

export const lastReadAtom = atomWithStorage<Surah|null>('surah', null);
export const surahListAtom = atomWithStorage<Surah[]>('list', []);
export const savedVerseAtom = atomWithStorage<Verse[]>('verse-bookmarks', []);
export const savedSurahAtom = atomWithStorage<Partial<Surah>[]>('surah-bookmarks', []);
