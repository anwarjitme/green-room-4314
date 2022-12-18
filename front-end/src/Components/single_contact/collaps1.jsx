import {
  Button,
  Collapse,
  Box,
  useDisclosure,
  Container,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function Collapse_about() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container py="15px" margin="auto">
      <Button float="left" variant="link" onClick={onToggle}>
        <ChevronDownIcon /> About this contact
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Card width="100%" mt={20}>
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Overview
                </Heading>
                <Text pt="2" fontSize="sm">
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Analysis
                </Heading>
                <Text pt="2" fontSize="sm">
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Collapse>
    </Container>
  );
}

function Collapse_communication() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container py="15px">
      <Button float="left" variant="link" onClick={onToggle}>
        <ChevronDownIcon /> Communication subscriptions
      </Button>
      <Collapse border="gray" in={isOpen} animateOpacity>
        <Box
          p="20px"
          // width="100%"
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

function Website_activity() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container py="15px">
      <Button float="left" variant="link" onClick={onToggle}>
        <ChevronDownIcon /> Website activity
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
export { Website_activity, Collapse_about, Collapse_communication };
