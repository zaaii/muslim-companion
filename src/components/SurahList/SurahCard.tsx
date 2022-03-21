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
  };

  return (
    <HStack
      align="center"
      borderBottom="1px"
      borderBottomColor="gray.200"
      py={2}
      cursor="pointer"
      onClick={handleSurahClick}
    >
      <HStack flex={1}>
        <Text
          mr="4"
          fontSize="lg"
          fontWeight="bold"
          minW="24px"
          textAlign="center"
        >
          {number}
        </Text>
        <Stack align="flex-start" spacing={2}>
          <Text fontWeight={700} p={0} m={0}>
            {surahName}
          </Text>
          <Text p={0} m={0}>
            {revelation} • {numberOfVerses} ayat
          </Text>
        </Stack>
      </HStack>
      <Text align="end" fontSize="4xl">
        {surahArabName}
      </Text>
    </HStack>
  );
}
