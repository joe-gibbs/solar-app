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
  }, []);

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
        <Box maxW="768px" p="3" backgroundColor="blackAlpha.500" color="white">
          <Text fontWeight="bold" as="h1" fontSize="7xl">
            The future of home automation
          </Text>
          <Text fontSize="6xl" mb="6" fontWeight="semibold">
            Save up to 60% on your power bill
          </Text>
          <Text fontSize="2xl" mb="6" fontWeight="semibold">
            [App name] saves you money by automating your home systems to run
            your heating and cooling when power is the cheapest. Get home to a
            cool house in the summer and a cool $500 extra in your pocket.
          </Text>
        </Box>
      </Flex>
      <Box bg="gray.50">
        <Container maxW="container.xl" ref={containerRef} minH="100vh">
          <Box pt="16">
            <BarChart width={barChartWidth} height={500} />
          </Box>

          <Box id="about" mt="16">
            <Text textAlign="end" fontSize="6xl" mb="6" fontWeight="semibold">
              How it works
            </Text>
            <Flex>
              <Box mr="16" maxW="60%">
                <Text>
                  Using a proprietary algorithm, our system will determine what
                  the best time is to run your heating and cooling. It will take
                  into account temperature, prices of electricity and many other
                  variables.
                </Text>
                <Text mt="4">
                  By scheduling your biggest power users, Zen Solar can reduce
                  your energy consumption by up to 40%. If you're looking for
                  hundreds of dollars less on your power bills, Zen Solar has
                  your solution.
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
            <Text
              textAlign="center"
              fontSize="6xl"
              mb="6"
              fontWeight="semibold"
            >
              Pricing
            </Text>
            <Pricing />
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
};
