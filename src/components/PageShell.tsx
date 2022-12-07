import {
  Box,
  Button,
  Flex,
  Text,
  Link as ChakraLink,
  LinkBox,
} from "@chakra-ui/react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

interface PageShellProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
}

export const PageShell = ({ children, title }: PageShellProps) => {
  return (
    <Box>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box
        zIndex={10}
        backgroundColor="whiteAlpha.800"
        backdropFilter="blur(20px)"
        w="100%"
        py="2"
        minH="12"
        position="fixed"
        top="0"
        shadow="md"
      >
        <Flex align="center" justifyContent="space-between">
          <Link to="/">
            <LinkBox>
              <Text ml="5">Logo here</Text>
            </LinkBox>
          </Link>
          <Flex align="center" mr="8">
            <Box mr="4">
              <ChakraLink href="/#about">About</ChakraLink>
            </Box>
            <Box mr="4">
              <ChakraLink href="/#pricing">Pricing</ChakraLink>
            </Box>
            <Link to="/sign-in">
              <Button ml="4" colorScheme="blue">
                Sign in
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
      {children}
      <Flex shadow="xl" py="16" w="100%" justifyContent="space-around">
        <Text>Copyright 2023 Name of Company</Text>
        <Link to="/terms">Terms of service</Link>
      </Flex>
    </Box>
  );
};
