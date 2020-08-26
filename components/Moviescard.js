import React from "react";
import { Box, Flex, Heading, Grid } from "@chakra-ui/core";
import { FaChevronRight } from "react-icons/fa";
import Longimagecard from "./Longimagecard";

const Moviescard = () => {
  const secondGallery = [
    {
      title: "House of 1000 Corpses",
      img: "Five.jpeg",
      color: "rgba(0, 204, 204),rgba(0,0,0,0.1)",
    },
    {
      title: "The House That Jack Built",
      img: "Twenty-three.jpeg",
      color: "rgba(153,76,0),rgba(0,0,0,0.6)",
    },
    {
      title: "The Devil's Rejects Director's Cut",
      img: "Eight.jpeg",
      color: "rgba(153, 153, 0),rgba(0,0,0,0.6)",
    },
    {
      title: "Safe House",
      img: "Two.jpeg",
      color: "rgba(255,51,51),rgba(0,0,0,0.1)",
    },
  ];
  return (
    <Box mt={10}>
      <Flex align="center" pb={4} pl={{ md: 10 }} color="#fff">
        <Heading as="h6" fontSize="md" pr={{ md: 2 }}>
          MOVIES FOR YOU
        </Heading>
        <FaChevronRight />
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" w="95%" mx="auto" gap={1}>
        {secondGallery.map((item, idx) => (
          <Longimagecard
            height="58vh"
            key={idx}
            bg={`linear-gradient(to top, ${item.color}),url("/images/${item.img}")`}
            title={item.title}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Moviescard;
