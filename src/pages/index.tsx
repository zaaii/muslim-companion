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
        <LastReadCard />
        <SurahList />
      </Stack>
      <Footer />
    </>
  );
}
