import { useToast } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import SurahDetailNavBar from '../../components/SurahDetail/SurahDetailNavBar';
import SurahDetail from '../../components/SurahDetail';
import useBookmark from '../../hooks/useBookmark';
import useMyQuranAPI from '../../hooks/useMyQuranAPI';
import { SurahDetails } from '../../interfaces/Surah';
import { useAtom } from 'jotai';
import { lastReadAtom } from '../../atom/store';
import { useEffect } from 'react';

export default function SurahDetailsPage() {
  const router = useRouter();
  const [, saveLastRead] = useAtom(lastReadAtom);
  const { getSurahIndex, toggle } = useBookmark();
  const { number } = router.query;
  const { response, isLoading } = useMyQuranAPI<SurahDetails>(
    `surah/${number}`
  );
  const toast = useToast({
    variant: 'subtle',
    status: 'info',
    position: 'bottom',
  });

  const surahName = response?.data?.name.transliteration.id;
  const isSaved = getSurahIndex(response?.data.number) >= 0;

  const handleBookmarkClick = () => {
    toggle(response?.data);
    if (!isSaved) {
      toast({
        
        status: 'success',
        title: `Surat ${surahName} disimpan`,
        description: `surat yang disimpan dapat dilihat dalam halaman bookmark`
      })
    } else {
      toast({
        title: `Surat ${surahName} dihapus dari bookmark`,
      })
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  useEffect(() => {
    if (response?.data) {
      saveLastRead(response?.data)
    }
  }, [response]);

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
      <SurahDetailNavBar
        onBackClick={handleBackClick}
        onBookmarkClick={handleBookmarkClick}
        isSaved={isSaved}
      />
      <SurahDetail
        surah={response?.data}
        isLoading={isLoading}
      />
    </>
  );
}
