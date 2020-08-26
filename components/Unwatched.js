import React from "react";
import { Box, Flex, Heading, Grid, Image } from "@chakra-ui/core";
import { FaChevronRight } from "react-icons/fa";
import Imagecard from "./Imagecard";

const Unwatched = () => {
  const unwatchedStuff = [
    { img: "Twenty-five.jpeg" },
    { img: "Twelve.jpeg" },
    { img: "Twenty-six.jpeg" },
  ];
  return (
    <Box mt={10}>
      <Flex align="center" pb={4} pl={{ md: 10 }} color="#fff">
        <Heading as="h6" fontSize="md" pr={{ md: 2 }}>
          UNWATCHED IN MY STUFF
        </Heading>
        <FaChevronRight />
      </Flex>
      <Grid templateColumns="repeat(4,1fr)" w="95%" mx="auto" gap={1}>
        {unwatchedStuff.map((item, idx) => (
          <Image key={idx} src={`/images/${item.img}`} />
        ))}
      </Grid>
    </Box>
  );
};

export default Unwatched;
