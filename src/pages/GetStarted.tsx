import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
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
              <Input mb="2" placeholder="Name"></Input>
              <Input mb="2" placeholder="Email"></Input>
              <Input mb="2" placeholder="Phone number"></Input>
            </form>
            <Flex justify="end">
              <Button onClick={() => {}} colorScheme="blue">
                Sign in
              </Button>
            </Flex>
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