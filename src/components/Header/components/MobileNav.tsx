import { Stack, useColorModeValue } from '@chakra-ui/react';
import { NAV_ITEMS_PUBLIC } from '../constants';
import MobileNavItem from './MobileNavItem';

function MobileNav() {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS_PUBLIC.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
