import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BarChart } from "../components/BarChart";
import { PageShell } from "../components/PageShell";
import { Pricing } from "../components/Pricing";

export const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [barChartWidth, setBarChartWidth] = useState(500);

  useEffect(() => {
    setBarChartWidth(containerRef.current?.clientWidth ?? 500);
  }, [containerRef.current]);

  return (
    <PageShell title="Home - Solar">
      <Flex align="center" justify="center" w="100%" h="100vh">
        <video
          style={{
            zIndex: -1,
            position: "absolute",
            height: "100%",
          }}
          src="assets/video/banner.mp4"
          autoPlay
          controls={false}
          loop
          muted
        />

        <Text color="white" fontWeight="bold" as="h1" fontSize="7xl">
          The future of home automation
        </Text>
      </Flex>
      <Box bg="gray.50">
        <Container maxW="container.xl" ref={containerRef} minH="100vh">
          <Box pt="16">
            <Text fontSize="6xl" mb="6" fontWeight="semibold">
              Save up to 60% on your power bill
            </Text>
            <BarChart width={barChartWidth} height={500} />
          </Box>

          <Box id="about" mt="16">
            <Text textAlign="end" fontSize="6xl" mb="6" fontWeight="semibold">
              How it works
            </Text>
            <Flex>
              <Box mr="16" maxW="60%">
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ipsam, eligendi ipsum dolores dicta, dolor eveniet
                  quo doloremque voluptas quasi a quisquam blanditiis sunt vel?
                  Nam ea reprehenderit laborum. Maxime.
                </Text>
                <Text mt="4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  et veniam laboriosam laudantium quisquam dolorem odio
                  explicabo nesciunt, reprehenderit error nisi. Dolores nesciunt
                  ad natus beatae itaque harum aliquam ipsa.
                </Text>
                <Text mt="4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam unde officia ratione vero optio pariatur tempore a
                  alias enim possimus doloremque, facilis voluptas. Deserunt
                  totam quidem possimus, voluptas vitae eos?
                </Text>
              </Box>
              <Image maxW="40%" src="assets/images/installation.jpg" />
            </Flex>
          </Box>

          <Box id="pricing" mt="16">
            <Text fontSize="6xl" mb="6" fontWeight="semibold">
              Pricing
            </Text>
            <Pricing />
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
};
