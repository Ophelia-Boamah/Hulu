import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Box bg="#222" color="#fff" p={10}>
      <Flex align="center" justify="space-between">
        <Flex>
          <Link>ABOUT</Link>
          <Link pl={4}>JOBS</Link>
          <Link pl={4}>HELP</Link>
          <Link pl={4}>ACCESSIBILITY</Link>
        </Flex>
        <Text>&copy; 2020 Hulu, LLC</Text>
      </Flex>
      <Flex mt={6}>
        <Link>About Ads</Link>
        <Link pl={4}>Terms of Use</Link>
        <Link pl={4}>Privacy Policies</Link>
        <Link pl={4}>Do not sell my Personal Information</Link>
        <Link pl={4}>Your California Privacy Rights</Link>
      </Flex>
    </Box>
  );
};

export default Footer;
