import React from "react";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/core";
import { FaSistrix, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box py={{ md: 2 }} borderBottom="1px solid #aaa">
      <Flex align="center" justify="space-between" px={{ md: 10 }}>
        <Heading as="h4" fontSize="xl">
          Hulu
        </Heading>
        <Flex>
          <Link bg="#aaa" px={1} borderRadius="3px">
            HOME
          </Link>
          <Link pl={{ md: 6 }}>MY STUFF</Link>
          <Link pl={{ md: 6 }}>TV SHOWS</Link>
          <Link pl={{ md: 6 }}>MOVIES</Link>
          <Link pl={{ md: 6 }}>HUBS</Link>
        </Flex>
        <Flex align="center">
          <FaSearch />
          <Text bg="#aaa" borderRadius="50%" px={1} ml={{ md: 4 }}>
            B
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
