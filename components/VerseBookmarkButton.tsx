import { IconButton } from '@chakra-ui/react';
import { IoBookmarkOutline } from 'react-icons/io5';


export default function VerseBookmarkButton() {
  return (
    <IconButton
      icon={<IoBookmarkOutline />}
      aria-label="bookmark"
      variant="ghost"
      color="green.700"
    />
  );
}
