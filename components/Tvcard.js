import React from "react";
import { Box, Flex, Heading, Grid } from "@chakra-ui/core";
import { FaChevronRight } from "react-icons/fa";
import Longimagecard from "./Longimagecard";

const Tvcard = () => {
  const secondGallery = [
    {
      title: "Worst Bakers in America",
      img: "One.jpeg",
      text: "S1 E1 - Baking Fill ",
      color: "rgba(153,76,0),rgba(0,0,0,0.6)",
    },
    {
      title: "Thundercats",
      img: "Three.jpeg",
      text: "S1 E1 - Exodus",
      color: "rgba(102,0,0),rgba(0,0,0,0.6)",
    },
    {
      title: "Murder in Paradise",
      img: "Nine.jpeg",
      text: "S1 E1 - Charmed to Death ",
      color: "rgba(51, 153, 255),rgba(0,0,0,0.6)",
    },
    {
      title: "Evil Talks: Chilling Confessions",
      img: "Fifteen.jpeg",
      text: "S1 E1 - The Killer Collective",
      color: "rgba(0,204,204),rgba(0,0,0,0.6)",
    },
  ];
  return (
    <Box mt={20}>
      <Flex align="center" pb={4} pl={{ md: 10 }} color="#fff">
        <Heading as="h6" fontSize="md" pr={{ md: 2 }}>
          TV FOR YOU
        </Heading>
        <FaChevronRight />
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" w="95%" mx="auto" gap={1}>
        {secondGallery.map((item, idx) => (
          <Longimagecard
            height="60vh"
            key={idx}
            bg={`linear-gradient(to top, ${item.color}),url("/images/${item.img}")`}
            title={item.title}
            text={item.text}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Tvcard;
