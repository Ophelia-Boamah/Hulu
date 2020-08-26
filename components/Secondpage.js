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
import Tvcard from "./Tvcard";
import Moviescard from "./Moviescard";
import Unwatched from "./Unwatched";
import Genres from "./Genres";

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

  return (
    <Box bg="#333">
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
        <Tvcard />
        <Moviescard />
        <Unwatched />
        <Genres />
      </Box>
    </Box>
  );
};

export default Secondpage;
