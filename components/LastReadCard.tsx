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
        bgColor="gray.100"
        cursor="pointer"
        onClick={handleCardClick}
        align="center"
        backdropFilter="saturate(180%) blur(20px)"
      >
        <HStack align="center">
          <Icon as={IoBook} />
          <Text>Terakhir Dibaca</Text>
        </HStack>
        <Heading fontSize="4xl">{short}</Heading>
        <Text>{transliterationID}</Text>
      </Stack>
    );
  }

  return <></>;
}
