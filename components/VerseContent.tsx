import { Stack, Text } from '@chakra-ui/react';

interface Props {
  arabText: string;
  englishText: string;  
  translationInID: string;
}

export default function VerseContent({ arabText, englishText, translationInID }: Props) {
  return (
    <Stack px={4}>
      <Text textAlign="right" fontSize={[24, 32]} color="green.800">
        {arabText}
      </Text>
      <Text color="green.600">
        {englishText}
      </Text>
      <Text as="i">
      {translationInID}
      </Text>
    </Stack>
  );
}