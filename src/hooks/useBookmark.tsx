import { useAtom } from 'jotai';

import { savedSurahAtom } from '../atom/store';
import { Surah } from '../interfaces/Surah';

type ReturnType = {
  getSurahIndex: (number: number) => number;
  toggle: (surah: Surah) => void;
};

export default function useBookmark(): ReturnType {
  const [savedSurah, storeSurah] = useAtom(savedSurahAtom);

  const getSurahIndex = (number: number) => {
    return savedSurah.findIndex((saved) => saved.number === number);
  };

  const toggle = (surah: Surah) => {
    const surahIndex = getSurahIndex(surah.number);
    if (surahIndex < 0) {
      storeSurah([
        ...savedSurah,
        {
          name: surah.name,
          number: surah.number,
          numberOfVerses: surah.numberOfVerses,
          revelation: {
            id: surah.revelation.id,
          },
        },
      ]);
    } else {
      storeSurah(savedSurah.filter((saved) => saved.number !== surah.number));
    }
  };

  return { getSurahIndex, toggle };
}
