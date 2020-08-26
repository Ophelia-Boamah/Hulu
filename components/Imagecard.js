import React from "react";
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/core";
import { FaEllipsisV } from "react-icons/fa";

const Imagecard = ({ img, title, text }) => {
  return (
    <Box color="#fff">
      <Image src={img} w={{ md: "400px" }} />
      <Flex pt={2} justify="space-between">
        <Heading as="h6" fontSize="md">
          {title}
        </Heading>
        <FaEllipsisV />
      </Flex>
      <Text>{text}</Text>
    </Box>
  );
};

export default Imagecard;
