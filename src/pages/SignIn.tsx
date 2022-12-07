import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { PageShell } from "../components/PageShell";

export const SignIn = () => {
  const navigate = useNavigate();
  return (
    <PageShell title="Sign in">
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
              Sign in
            </Text>
            <Input mb="2" placeholder="Username"></Input>
            <Input mb="2" placeholder="Password"></Input>
            <Flex justify="end">
              <Button
                onClick={() => {
                  navigate("/dashboard");
                }}
                colorScheme="blue"
              >
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
