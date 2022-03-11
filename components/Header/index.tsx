import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';

import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box pos="sticky" top={0} zIndex={4}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <Icon as={IoCloseOutline} w={3} h={3} />
              ) : (
                <Icon as={IoMenuOutline} w={5} h={5} />
              )
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 'not-set', md: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'right', md: 'left' })}
            fontFamily="heading"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
          >
            Muslim Companion
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

export default Header;