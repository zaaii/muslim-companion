import { Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

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
          <Text>Terakhir Dibaca</Text>
        </HStack>
        <Heading fontSize="4xl">{short}</Heading>
        <Text>{transliterationID}</Text>
      </Stack>
    );
  }

  return <></>;
}
