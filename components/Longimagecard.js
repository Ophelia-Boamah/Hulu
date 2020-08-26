import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/core";
import { FaRegArrowAltCircleRight, FaEllipsisV } from "react-icons/fa";

const Longimagecard = ({ bg, title, text }) => {
  return (
    <Box>
      <Box
        bg={bg}
        bgPos="center"
        bgSize="cover"
        w={{ md: "370px" }}
        color="#fff"
        h="50vh"
      >
        <Box>
          <FaEllipsisV />
          <Heading as="h5" fontSize="md">
            {title}
          </Heading>
          <Text>{text}</Text>
          <Flex py={10} bg="#333">
            <FaRegArrowAltCircleRight />
            <Text pl={{ md: 2 }}>DETAILS</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Longimagecard;
