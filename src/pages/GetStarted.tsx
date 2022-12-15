import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";

export const GetStarted = () => {
  return (
    <PageShell title="Get started">
      <Box w="100vw" backgroundColor="blue.50" h="100vh">
        <Flex w="100%" h="100%" justify="center" align="center">
          <Box
            p="8"
            w="500px"
            borderRadius="md"
            backgroundColor="white"
            shadow="md"
          >
            <Text mb="4" fontSize="2xl">
              Get started
            </Text>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />

              <Input name="name" mb="2" placeholder="Name"></Input>
              <Input
                name="email"
                mb="2"
                type="email"
                placeholder="Email"
              ></Input>
              <Input
                name="phone"
                mb="2"
                type="tel"
                placeholder="Phone number"
              ></Input>
              <Flex justify="end">
                <Button type="submit" colorScheme="blue">
                  Sign in
                </Button>
              </Flex>
            </form>
            <Text mt="2">
              Don't have an account? Take a look at{" "}
              <Link to="/#pricing" style={{ textDecoration: "underline" }}>
                our pricing models
              </Link>
              .
            </Text>
          </Box>
        </Flex>
      </Box>
    </PageShell>
  );
};
