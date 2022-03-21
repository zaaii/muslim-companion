import { Skeleton, Stack } from '@chakra-ui/react';

import { SurahDetails } from '../../interfaces/Surah';

import SurahHero from './SurahHero';
import VerseList from './VerseList';

interface Props {
  isLoading: boolean;
  surah?: SurahDetails;
}

export default function SurahDetail({ isLoading, surah }: Props) {
  if (!isLoading && surah) {
    return (
      <Stack px={2} my={4}>
        <SurahHero
          numberOfVerses={surah.numberOfVerses}
          revelationInID={surah.revelation.id}
          surahNameInArab={surah.name.short}
          surahNameInID={surah.name.translation.id}
          transliterationInID={surah.name.transliteration.id}
        />
        <VerseList verses={surah.verses} />
      </Stack>
    );
  }

  return (
    <Stack px={2} my={4}>
      <Skeleton h="160px" rounded="md" py={4} bg="gray.100" />
      {[...new Array(3)].map((_, index) => (
        <Stack key={`verse-skeleton-${index}`} spacing={2}>
          <Skeleton h="40px" py={4} />
          <Skeleton h="60px" py={4} />
          <Skeleton h="24px" py={4} />
          <Skeleton h="24px" py={4} />
        </Stack>
      ))}
    </Stack>
  );
}
