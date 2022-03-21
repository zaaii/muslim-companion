import { Heading, Stack, Text } from '@chakra-ui/react';

interface Props {
  surahNameInID: string;
  surahNameInArab: string;
  transliterationInID: string;
  revelationInID: string;
  numberOfVerses: number;
}

export default function SurahHero({
  surahNameInArab,
  transliterationInID,
  revelationInID,
  numberOfVerses,
}: Props) {
  return (
    <Stack
      rounded="md"
      align="center"
      py={4}
      shadow="md"
      bg="gray.100"
      minH="160px"
    >
      <Heading>{surahNameInArab}</Heading>
      <Heading>{transliterationInID}</Heading>
      <Text>
        {revelationInID} | {numberOfVerses} Ayat
      </Text>
    </Stack>
  );
}
