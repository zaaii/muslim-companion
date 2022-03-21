import { Skeleton, Stack } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BackNavigationBar from '../../components/BackNavigationBar';
import SurahDetail from '../../components/SurahDetail';
import useMyQuranAPI from '../../hooks/useMyQuranAPI';
import { SurahDetails } from '../../interfaces/Surah';

export default function SurahDetailsPage() {
  const router = useRouter();
  const { number } = router.query;
  const { response, isLoading } = useMyQuranAPI<SurahDetails>(
    `surah/${number}`
  );

  const surahName = response?.data?.name.transliteration.id;

  return (
    <>
      <Head>
        <title>Muslim Companion | Qur&apos;an Reader - {surahName}</title>
        <meta
          name="description"
          content={`Baca surah ${surahName} beserta murrotal dengan mudah`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackNavigationBar />
      <SurahDetail surah={response?.data} isLoading={isLoading} />
    </>
  );
}
