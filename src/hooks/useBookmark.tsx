import { useToast } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { savedSurahAtom } from '../atom/store';
import { Surah } from '../interfaces/Surah';

type ReturnType = {
  getSurahIndex: () => void,
  toggle: () => void,
}

export default function useBookmark() {
  const [savedSurah, storeSurah] = useAtom(savedSurahAtom);
  const toast = useToast();

  const getSurahIndex = (number: number) => {
    return savedSurah.findIndex(saved => saved.number === number);
  }

  const toggle = (surah: Surah) => {
    const surahIndex = getSurahIndex(surah.number);
    if (surahIndex < 0) {
      storeSurah([...savedSurah, { name: surah.name, number: surah.number }]);
    } else {
      storeSurah(savedSurah.filter(saved => saved.number !== surah.number));
    }
  }

  return {getSurahIndex, toggle}
}