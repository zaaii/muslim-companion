import { Divider, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import Head from 'next/head';
import { IoBookmarkOutline } from 'react-icons/io5';

import { savedSurahAtom } from '../atom/store';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SurahList from '../components/SurahList';

export default function BookmarkPage() {
  const [surah] = useAtom(savedSurahAtom);
  return (
    <>
      <Head>
        <title>Muslim Companion | Qur&apos;an Reader</title>
        <meta name="description" content="Baca Qur'an dengan mudah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Stack p={4} minH="calc(100vh - 144px)">
        {surah && surah.length > 0 ? (
          <SurahList isLoading={false} list={surah} />
        ) : (
          <Stack align="center" justify="center">
            <Heading>Belum ada surat yang disimpan.</Heading>
            <Divider />
            <HStack>
              <Text>
                Tekan tombol Bookmark <Icon as={IoBookmarkOutline} size="xl" />{' '}
                untuk menyimpan surat.
              </Text>
            </HStack>
          </Stack>
        )}
      </Stack>
      <Footer />
    </>
  );
}
