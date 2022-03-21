import { HStack, IconButton, Text } from '@chakra-ui/react';
import { IoArrowBack, IoBookmark, IoBookmarkOutline } from 'react-icons/io5';

interface Props {
  onBookmarkClick: () => void;
  onBackClick: () => void;
  isSaved: boolean;
}

export default function SurahDetailNavBar({
  onBackClick,
  onBookmarkClick,
  isSaved,
}: Props) {
  return (
    <HStack
      align="center"
      justify="space-between"
      position="sticky"
      top="0"
      bg="white"
      zIndex={3}
    >
      <HStack>
        <IconButton
          icon={<IoArrowBack />}
          onClick={onBackClick}
          aria-label="back"
          rounded="full"
          variant="ghost"
        />
        <Text>Beranda</Text>
      </HStack>
      <IconButton
        icon={isSaved ? <IoBookmark /> : <IoBookmarkOutline />}
        onClick={onBookmarkClick}
        aria-label="bookmark"
        rounded="full"
        variant="ghost"
      />
    </HStack>
  );
}
