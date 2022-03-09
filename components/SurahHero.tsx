import { Divider, Heading, Stack, Text } from '@chakra-ui/react';

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
    <Stack rounded="md" bgColor="green.100" align="center" py={4} shadow="md">
      <Heading color="green.800">{surahNameInArab}</Heading>
      <Heading color="green.800">{transliterationInID}</Heading>
      <Divider colorScheme="green"/>
      <Text>
        {revelationInID} | {numberOfVerses} Ayat
      </Text>
    </Stack>
  );
}
