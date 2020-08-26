import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/core";
import { FaRegArrowAltCircleRight, FaEllipsisV } from "react-icons/fa";

const Longimagecard = ({ bg, title, text, height }) => {
  return (
    <Box>
      <Box
        bg={bg}
        bgPos="center"
        bgSize="cover"
        w={{ md: "370px" }}
        color="#fff"
        h={height}
      >
        <Flex flexDir="column" justifyContent="space-between" py={4}>
          <Box pl={350}>
            <FaEllipsisV />
          </Box>
          <Box mt={340}>
            <Heading as="h5" fontSize="md" pl={{ md: 2 }}>
              {title}
            </Heading>
            <Text pl={{ md: 2 }}>{text}</Text>
            <Flex py={4} align="center" pl={2} mt={4} bg="#111">
              <FaRegArrowAltCircleRight />
              <Text pl={{ md: 2 }}>DETAILS</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Longimagecard;
