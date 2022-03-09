import { HStack, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface Props {
  number: number;
  surahName: string;
  surahArabName: string;
  revelation: string;
  numberOfVerses: number;
}

export default function SurahCard({
  number,
  surahName,
  surahArabName,
  revelation,
  numberOfVerses,
}: Props) {
  const router = useRouter();
  
  const handleSurahClick = () => {
    router.push(`/surah/${number}`);
  }

  return (
    <HStack
      align="center"
      borderBottom="1px"
      borderBottomColor="gray.200"
      py={2}
      cursor="pointer"
      onClick={handleSurahClick}
    >
      <Text w="10%">{number}</Text>
      <Stack flex={1} justify="center" align="flex-start" spacing={1}>
        <Text fontWeight={700} p={0} m={0} color="green.800">
          {surahName}
        </Text>
        <Text p={0} m={0}>
          {revelation} | {numberOfVerses} ayat
        </Text>
      </Stack>
      <Text align="end" fontSize="2xl" color="green.600">
        {surahArabName}
      </Text>
    </HStack>
  );
}
