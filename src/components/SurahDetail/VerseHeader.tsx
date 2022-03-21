import { HStack, Text } from '@chakra-ui/react';
import AudioControl from './AudioControl';

interface Props {
  number: number;
  audioSrc: string;
}

export default function VerseHeader({ number, audioSrc }: Props) {
  return (
    <HStack
      justify="space-between"
      bgColor="gray.100"
      px={[2, 4]}
      rounded="md"
      pos="sticky"
      top="42px"
      zIndex={2}
    >
      <Text>{number}</Text>
      <HStack>
        <AudioControl audioSrc={audioSrc} />
      </HStack>
    </HStack>
  );
}
