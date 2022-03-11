import { Box, Flex, Icon, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';

import { IoChevronForwardOutline } from 'react-icons/io5';
import { NavItem } from '../types';

function DesktopSubNav({ label, href, subLabel }: NavItem) {
  return (
    <Link
      href={href}
      role="group"
      display="block"
      p={2}
      rounded="md"
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
      <Stack direction="row" align="center">
        <Box>
          <Text
            transition="all .3s ease"
            _groupHover={{ color: 'blue.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize="sm">{subLabel}</Text>
        </Box>
        <Flex
          transition="all .3s ease"
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify="flex-end"
          align="center"
          flex={1}>
          <Icon color="blue.400" w={5} h={5} as={IoChevronForwardOutline} />
        </Flex>
      </Stack>
    </Link>
  );
};

export default DesktopSubNav;
