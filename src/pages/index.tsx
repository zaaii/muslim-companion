import { Stack } from '@chakra-ui/react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import LastReadCard from '../components/LastReadCard';
import SurahList from '../components/SurahList';

import useMyQuranAPI from '../hooks/useMyQuranAPI';
import { Surah } from '../interfaces/Surah';

export default function Home() {
  const { isLoading, response } = useMyQuranAPI<Surah[]>('surah');
  return (
    <>
      <Head>
        <title>Muslim Companion | Qur&apos;an Reader</title>
        <meta name="description" content="Baca Qur'an dengan mudah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Stack p={4}>
        <LastReadCard />
        <SurahList isLoading={isLoading} list={response?.data} />
      </Stack>
      <Footer />
    </>
  );
}
