import {
  useColorModeValue, useDisclosure, chakra, Flex, HStack, IconButton, VStack, CloseButton, Button,
  Avatar, Box
} from '@chakra-ui/react';
import { HamburgerIcon, BellIcon } from '@chakra-ui/icons'
import React from 'react'
import { ActiveLink } from '../ActiveLink';
import { menuItems } from './menuItems';

export const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <HStack position={'sticky'} top={0}>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<HamburgerIcon />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={4}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <>
                  {menuItems.map(item => (
                    <ActiveLink key={item.text} text={item.text} href={item.href} />
                  ))}
                </>
              </VStack>
            </Box>
            <chakra.a
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            </chakra.a>
            <HStack
              spacing={4}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <>
                {menuItems.map(item => (
                  <ActiveLink key={item.text} text={item.text} href={item.href} />
                ))}
              </>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <Button variant={'ghost'} leftIcon={<BellIcon />}>
              New Wallet
            </Button>
          </HStack>
        </Flex>
      </chakra.header>
    </HStack>
  );
}
