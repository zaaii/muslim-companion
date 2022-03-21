import { Stack, Text } from '@chakra-ui/react';

interface Props {
  arabText: string;
  englishText: string;  
  translationInID: string;
}

export default function VerseContent({ arabText, englishText, translationInID }: Props) {
  return (
    <Stack px={4}>
      <Text textAlign="right" fontSize={['3xl', '4xl']} lineHeight="2">
        {arabText}
      </Text>
      <Text fontWeight="medium">
        {englishText}
      </Text>
      <Text as="i" fontWeight="light">
      {translationInID}
      </Text>
    </Stack>
  );
}