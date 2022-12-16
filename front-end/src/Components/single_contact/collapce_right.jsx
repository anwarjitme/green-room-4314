import {
  Button,
  Collapse,
  Box,
  useDisclosure,
  Container,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Drawer_Right from "./Drower_right";
function Company() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container py="15px">
      <Flex justifyContent="space-between">
        <Button float="left" variant="link" onClick={onToggle}>
          <ChevronDownIcon /> Companies
        </Button>
        <Drawer_Right/>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box mt="4" bg="fff" rounded="md" shadow="md">
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

function Deals() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container py="15px">
      <Button float="left" variant="link" onClick={onToggle}>
        <ChevronDownIcon />
       Deals
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="40px" color="white" mt="4" bg="gray" rounded="md" shadow="md">
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

function Tickets() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container py="15px">
      <Button
        
        variant="link"
        float="left"
        onClick={onToggle}
      >
        <ChevronDownIcon />Tickets
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="40px" color="gray" mt="4" bg="fff" rounded="md" shadow="md">
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
// function Tickets() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Container py="15px">
//       <Button variant="link" float="left" onClick={onToggle}>
//         <ChevronDownIcon />
//         Tickets
//       </Button>
//       <Collapse in={isOpen} animateOpacity>
//         <Box p="40px" color="gray" mt="4" bg="fff" rounded="md" shadow="md">
//           <h1>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
//             ipsum dolor delectus iure molestias alias, debitis, ut eligendi
//             praesentium impedit laborum. Itaque illo aut facere ratione
//             temporibus ex quis fugit.
//           </h1>
//         </Box>
//       </Collapse>
//     </Container>
//   );
// }
export { Company,Deals,Tickets };
