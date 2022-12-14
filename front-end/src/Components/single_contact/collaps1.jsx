import { Button, Collapse,Box, useDisclosure, Container } from '@chakra-ui/react';
import React from 'react'
import {  ChevronDownIcon,} from "@chakra-ui/icons"
  function Collapse_about() {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Container py="15px">
        <Button
          marginRight={200}
          variant="link"
          maxWidth="100px"
          onClick={onToggle}
        >
          {" "}
          <ChevronDownIcon /> About this contact
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            color="gray"
            mt="4"
            bg="fff"
            rounded="md"
            shadow="md"
          >
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              ipsum dolor delectus iure molestias alias, debitis, ut eligendi
              praesentium impedit laborum. Itaque illo aut facere ratione
              temporibus ex quis fugit.
            </h1>
          </Box>
        </Collapse>
      </Container>
    );
  }
  export {Collapse_about}