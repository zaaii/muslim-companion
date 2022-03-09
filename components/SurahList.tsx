import { Stack } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { surahListAtom } from '../atom/store';
import quranAPI from '../services/quranAPI';
import SurahCard from './SurahCard';

export default function SurahList() {
  const [listSurah, setListSurah] = useAtom(surahListAtom);

  useEffect(() => {
    quranAPI.getSurahList().then((response) => {
      setListSurah(response.data.data);
    });
  }, []);

  return (
    <Stack spacing={0}>
      {listSurah.map(
        ({
          number,
          numberOfVerses,
          revelation: { id: revelationId },
          name: {
            short,
            transliteration: { id: surahName },
          },
        }) => (
          <SurahCard
            key={number}
            number={number}
            numberOfVerses={numberOfVerses}
            surahName={surahName}
            surahArabName={short}
            revelation={revelationId}
          />
        )
      )}
    </Stack>
  );
}
