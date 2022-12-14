import React from "react";
import { Container, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Signup from "../Components/Login/Signup";
const SignupPage = () => {
  return (
    <div>
      <Container maxW={"90%"} mt={"10"}>
        <Flex justify={"space-between"}>
          <Image
            src="https://static.hsappstatic.net/ui-images/static-2.446/optimized/hubspot-wordmark.svg"
            w={"10%"}
          />
          <Text fontSize={"16px"}>
            Have an account?{" "}
            <Link style={{ color: "#527a8c", fontWeight: "bold" }}>
              Sign in.
            </Link>
          </Text>
        </Flex>
        <Signup />
      </Container>
    </div>
  );
};

export default SignupPage;
