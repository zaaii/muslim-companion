import { Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { IoShareSocial } from 'react-icons/io5';
import AudioControl from './AudioControl';
import VerseBookmarkButton from './VerseBookmarkButton';

interface Props {
  number: number;
  audioSrc: string;
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
        <IconButton
          icon={<IoShareSocial />}
          aria-label="share"
          variant="ghost"
          color="green.700"
        />
        <AudioControl audioSrc={audioSrc} />
        <VerseBookmarkButton />
      </HStack>
    </HStack>
  );
}
