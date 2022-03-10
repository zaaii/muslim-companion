import { HStack, IconButton, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IoArrowBack } from 'react-icons/io5';

export default function BackNavigationBar() {
  const { back } = useRouter();

  const handleBackClick = () => {
    back();
  };

  return (
    <HStack align="center" justify="space-between">
      <HStack>
        <IconButton
          icon={<IoArrowBack />}
          onClick={handleBackClick}
          aria-label="back"
          rounded="full"
          variant="ghost"
          color="green.700"
        />
        <Text>Beranda</Text>
      </HStack>
    </HStack>
  );
}
