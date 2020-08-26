import React from "react";
import {
  Box,
  Grid,
  Image,
  Heading,
  Text,
  Flex,
  ArrowRightIcon,
} from "@chakra-ui/core";
import Imagecard from "./Imagecard";
import { FaChevronRight } from "react-icons/fa";
import Longimagecard from "./Longimagecard";

const Secondpage = () => {
  const firstGallery = [
    { title: "Sorry to bother you", img: "Twenty-four.jpeg", text: "" },
    { title: "The Sopranos", img: "Seven.jpeg", text: "S6 E1 - Members Only" },
    {
      title: "Unusual Suspects",
      img: "Twenty.jpeg",
      text: "S6 E8 - Stone Cold Killer",
    },
    { title: "Us", img: "Seventeen.jpeg", text: "" },
    {
      title: "Cutthroat Kitchen",
      img: "Twenty-seven.jpeg",
      text: "S4 E10 - The Eggs-Orcist",
    },
  ];
  const secondGallery = [
    {
      title: "Worst Bakers in America",
      img: "One.jpeg",
      text: "S1 E1 - Baking Fill ",
    },
    {
      title: "Thundercats",
      img: "Three.jpeg",
      text: "S1 E1 - Exodus",
    },
    {
      title: "Murder in Paradise",
      img: "Nine.jpeg",
      text: "S1 E1 - Charmed to Death ",
    },
    {
      title: "Evil Talks: Chilling Confessions",
      img: "Twenty-seven.jpeg",
      text: "S1 E1 - The Killer Collective",
    },
  ];
  return (
    <Box bg="#222">
      <Box color="#fff" py={10}>
        <Flex align="center" pb={4} pl={{ md: 10 }}>
          <Heading as="h6" fontSize="md" pr={{ md: 2 }}>
            KEEP WATCHING
          </Heading>
          <FaChevronRight />
        </Flex>
        <Grid
          w={{ md: "95%" }}
          mx="auto"
          templateColumns="repeat(5, 1fr)"
          gap={2}
        >
          {firstGallery.map((item, idx) => (
            <Imagecard
              key={idx}
              title={item.title}
              text={item.text}
              img={`/images/${item.img}`}
            />
          ))}
        </Grid>
      </Box>
      <Box>
        <Flex align="center" pb={4} pl={{ md: 10 }} color="#fff">
          <Heading as="h6" fontSize="md" pr={{ md: 2 }}>
            TV FOR YOU
          </Heading>
          <FaChevronRight />
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" w="95%" mx="auto" gap={1}>
          {secondGallery.map((item, idx) => (
            <Longimagecard
              h="100px"
              key={idx}
              bg={`url("/images/${item.img}")`}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Secondpage;
