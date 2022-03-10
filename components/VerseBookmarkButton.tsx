import { IconButton } from '@chakra-ui/react';
import { IoBookmarkOutline } from 'react-icons/io5';

interface Props {
  verseNumber: string;
}

export default function VerseBookmarkButton({ verseNumber }: Props) {
  return (
    <IconButton
      icon={<IoBookmarkOutline />}
      aria-label="bookmark"
      variant="ghost"
      color="green.700"
    />
  );
}
