import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import Navbar from "../../components/navbar";
import Features from "../../components/features";
import Footer from "../../components/footer";
import { COLORS } from "../../colors";
import EditorPicDark from "../../assets/code-dark.png";
import EditorPicLight from "../../assets/code-light.png";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const Home = () => {
  return (
    <Box
      px={8}
      py={5}
      mx="auto"
      pb={20}
      backgroundColor={useColorModeValue(COLORS.white, COLORS.dark)}
    >
      <Navbar />
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pt={50}
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          All your{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            collaboration with Ai
          </Text>{" "}
          in one single place.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          Groom is a collaborative code editor where users can collaborate with
          their team in realtime.
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          pt={12}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Link to={`/docs`}>
            <Button
              as="a"
              colorScheme="gray"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
            >
              Documentation
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Link>

          <Link to="/room">
            <Button
              as="a"
              bgGradient="linear(to-r, green.400, purple.500)"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
              animation={`${bounce} 1s infinite`}
              _hover={{ transform: "scale(1.05)" }}
            >
              Create new room
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Link>
        </Stack>
      </Box>
      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src={useColorModeValue(EditorPicDark, EditorPicLight)}
          alt="Codestream editor"
        />
      </Box>
      <Features />
      <Footer />
    </Box>
  );
};

export default Home;
