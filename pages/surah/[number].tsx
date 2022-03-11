import { Skeleton, Stack } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import Head from 'next/head';
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
        <Head>
          <title>
            Muslim Companion | Qur'an Reader - {surah.name.transliteration.id}{' '}
          </title>
          <meta name="description" content="Muslim companion app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
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

  return (
    <>
      <Head>
        <title>Muslim Companion | Qur'an Reader</title>
        <meta name="description" content="Muslim companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackNavigationBar />
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
    </>
  );
}
