import { Stack } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { lastReadAtom } from '../../atom/store';
import BackNavigationBar from '../../components/BackNavigationBar';
import SurahHero from '../../components/SurahHero';
import VerseList from '../../components/VerseList';
import { SurahDetails } from '../../interfaces/Surah';
import quranAPI from '../../services/quranAPI';

export default function SurahDetailsPage() {
  const router = useRouter();
  const { number } = router.query;
  const [, setLastReadAtom] = useAtom(lastReadAtom);

  const [surah, setSurah] = useState<SurahDetails>(null);

  useEffect(() => {
    if (number) {
      quranAPI.getSurahByNumber(number as string).then((response) => {
        setLastReadAtom(response.data.data);
        setSurah(response.data.data);
      });
    }
  }, [number]);

  if (surah) {
    return (
      <>
        <BackNavigationBar />
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
      </>
    );
  }

  return <Stack>Loading...</Stack>;
}
