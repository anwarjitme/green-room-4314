import {
  Button,
  Collapse,
  Box,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function Collapse_communication() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container py="15px">
      <Button
        marginRight={120}
        variant="link"
        maxWidth="100px"
        onClick={onToggle}
      >
        <ChevronDownIcon />
        Communication subscriptions
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="gray"
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
export { Collapse_communication };