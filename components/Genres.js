import React from "react";
import { Box, Flex, Heading, Grid } from "@chakra-ui/core";
import { FaChevronRight } from "react-icons/fa";

const Genres = () => {
  const movieGenres = [
    "Action",
    "Adult Animation",
    "Adventure",
    "Anime",
    "Black Stories",
  ];
  return (
    <Box>
      <Flex align="center" pb={4} pl={{ md: 10 }} color="#fff">
        <Heading as="h6" fontSize="md" pr={{ md: 2 }}>
          GENRES
        </Heading>
        <FaChevronRight />
      </Flex>
      <Grid templateColumns="repeat(5, 1fr)" gap={2} w="95%" mx="auto">
        {movieGenres.map((item, idx) => (
          <Box bg="#000" key={idx} h={{ md: 200 }}>
            <Heading as="h5" fontSize="md" color="#00FFFF" pl={4} pt={145}>
              {item}
            </Heading>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Genres;
