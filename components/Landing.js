import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Text, Button, Heading, Flex } from "@chakra-ui/core";
import { FaEllipsisV } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Box
      bg="linear-gradient(to right, rgba(0,204,204,0.8 ), rgba(0,0,0,0.6 )), url('/images/Twenty-second.jpeg')"
      h="90vh"
      bgPos="center"
      bgSize="cover"
      color="#fff"
    >
      <Navbar />
      <Box mt={{ md: 300 }} pl={{ md: 12 }}>
        <Heading>
          Love in the Time <br /> of Corona
        </Heading>
        <Box my={{ md: 4 }}>
          <Heading as="h5" fontSize="md">
            S1 E1 - The Course of Love{" "}
            <Text
              bg="#fff"
              color="#000"
              as="sup"
              fontSize={{ md: "10px" }}
              fontWeight="lg"
              px={1}
            >
              NEW
            </Text>
          </Heading>
          <Text>James and Sade adjust to being together in quarantine.</Text>
        </Box>
        <Flex align="center">
          <Button variant="outline" color="#fff" mr={2}>
            DETAILS
          </Button>
          <FaEllipsisV />
        </Flex>
      </Box>
    </Box>
  );
}
