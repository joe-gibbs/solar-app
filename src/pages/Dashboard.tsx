import { Box, Container, Text } from "@chakra-ui/react";
import { PageShell } from "../components/PageShell";

export const Dashboard = () => {
  return (
    <PageShell title="Dashboard">
      <Box py="24" backgroundColor="gray.50">
        <Container
          maxW="container.lg"
          minH="768"
          shadow="md"
          backgroundColor="white"
        >
          <Text ml="4" fontSize="3xl" pt="4" fontWeight="semibold">
            Dashboard
          </Text>
        </Container>
      </Box>
    </PageShell>
  );
};
