import { Flex, HStack, Text } from '@chakra-ui/react';
import AudioControl from './AudioControl';

interface Props {
  number: number;
  audioSrc: HTMLAudioElement;
}

export default function VerseHeader({ number, audioSrc }: Props) {
  return (
    <HStack justify="space-between" bgColor="green.100" p={2} rounded="md">
      <Flex
        bgColor="green.500"
        p={2}
        w={8}
        h={8}
        align="center"
        justifyContent="center"
        rounded="full"
      >
        <Text color="white">{number}</Text>
      </Flex>
      <HStack>
        <AudioControl audioSrc={audioSrc} />
      </HStack>
    </HStack>
  );
}
