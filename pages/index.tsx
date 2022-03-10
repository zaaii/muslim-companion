import { Heading, HStack, IconButton, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import { IoSearch } from 'react-icons/io5';

import LastReadCard from '../components/LastReadCard';
import SurahList from '../components/SurahList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muslim Companion</title>
        <meta name="description" content="Muslim companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack p={4}>
        <HStack justify="space-between">
          <Heading fontSize="lg">Muslim Companion</Heading>
        </HStack>
        <Stack py={2}>
          <LastReadCard />
          <SurahList />
        </Stack>
      </Stack>
    </>
  );
}
