import { Stack } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

import LastReadCard from '../components/LastReadCard';
import SurahList from '../components/SurahList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muslim Companion | Qur&apos;an Reader</title>
        <meta name="description" content="Muslim companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Stack p={4}>
        <Stack justify="space-between">
          <LastReadCard />
        </Stack>
        <Stack py={2}>
          <SurahList />
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}
