import { Skeleton, Stack } from '@chakra-ui/react';

import { Surah } from '../../interfaces/Surah';
import SurahCard from './SurahCard';

interface Props {
  list: Surah[];
  isLoading: boolean;
}

export default function SurahList({ list, isLoading }:Props) {

  if (!isLoading && list) {
    const surahList = list.map((surah) => ({
      number: surah.number,
      numberOfVerses: surah.numberOfVerses,
      revelationId: surah.revelation.id,
      surahArabName: surah.name.short,
      surahName: surah.name.transliteration.id,
    }));

    return (
      <Stack spacing={0}>
        {surahList.map(
          ({
            number,
            numberOfVerses,
            revelationId,
            surahArabName,
            surahName,
          }) => (
            <SurahCard
              key={number}
              number={number}
              numberOfVerses={numberOfVerses}
              surahName={surahName}
              surahArabName={surahArabName}
              revelation={revelationId}
            />
          )
        )}
      </Stack>
    );
  }

  // Skeleton
  return (
    <Stack px={2} my={4} spacing={4}>
      {[...new Array(5)].map((_, index) => (
        <Skeleton
          h="56px"
          py={4}
          key={`verse-skeleton-${index}`}
          rounded="md"
        />
      ))}
    </Stack>
  );
}
