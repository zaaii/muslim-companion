import { useToast } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import BackNavigationBar from '../../components/BackNavigationBar';
import SurahDetail from '../../components/SurahDetail';
import useBookmark from '../../hooks/useBookmark';
import useMyQuranAPI from '../../hooks/useMyQuranAPI';
import { SurahDetails } from '../../interfaces/Surah';

export default function SurahDetailsPage() {
  const router = useRouter();
  const toast = useToast();
  const { getSurahIndex, toggle } = useBookmark();
  const { number } = router.query;
  const { response, isLoading } = useMyQuranAPI<SurahDetails>(
    `surah/${number}`
  );

  const surahName = response?.data?.name.transliteration.id;
  const isSaved = getSurahIndex(response?.data.number) >= 0;

  const handleBookmarkClick = () => {
    toggle(response?.data);
    if (!isSaved) {
      toast({
        variant: 'subtle',
        status: 'success',
        title: `Surat ${surahName} disimpan`,
        description: `surat yang disimpan dapat dilihat dalam halaman bookmark`
      })
    } else {
      toast({
        variant: 'subtle',
        status: 'info',
        title: `Surat ${surahName} dihapus dari bookmark`,
      })
    }
  };

  const handleBackClick = () => {
    router.back();
  };

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
      <BackNavigationBar
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
