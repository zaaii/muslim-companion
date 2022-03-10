import { Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { IoBook } from 'react-icons/io5';

import { lastReadAtom } from '../atom/store';

export default function LastReadCard() {
  const [lastRead] = useAtom(lastReadAtom);
  const { push } = useRouter();

  if (lastRead) {
    const {
      number,
      name: {
        transliteration: { id: transliterationID },
        short,
      },
    } = lastRead;

    const handleCardClick = () => {
      push(`surah/${number}`);
    };

    return (
      <Stack
        p={4}
        rounded="md"
        bgColor="green.100"
        cursor="pointer"
        onClick={handleCardClick}
        shadow="md"
        align="center"
      >
        <HStack align="center">
          <Icon as={IoBook} />
          <Text color="green.800">Terakhir Dibaca</Text>
        </HStack>
        <Heading color="green.800" fontSize="4xl">{short}</Heading>
        <Text color="green.800">{transliterationID}</Text>
      </Stack>
    );
  }

  return <></>;
}
