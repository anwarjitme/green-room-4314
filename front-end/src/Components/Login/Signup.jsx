import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Select,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../Redux/UserSignup/userSignup.action";
import { Navigate } from "react-router-dom";
const Signup = () => {
  const [signup, setSignup] = useState({});
  const { isAuth, isError } = useSelector((store) => store.signup);
  const toast = useToast();
  const dispatch = useDispatch();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  if (isAuth) {
    toast({
      title: "Success",
      description: "Sign Up",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
    return <Navigate to="/login" />;
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignup(signup));
    if (isError) {
      toast({
        title: "Something Went Wrong ",
        description: "please Fill all details",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Flex justify={"space-evenly"} gap={"60px"}>
        <VStack spacing={"10"} width={"35%"}>
          <Heading color={"blackAlpha.700"}>Create your free account</Heading>
          <Button w={"full"} colorScheme={"blue"} >
            <Center>
              <Text>Sign in with Google</Text>
            </Center>
          </Button>
          <form
            style={{ fontSize: "25px", marginBottom: "50px" }}
            onSubmit={handelSubmit}
          >
            <VStack spacing={"6"}>
              <HStack spacing={"24"}>
                <Box width={"50%"}>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      name="first_name"
                      variant={"flushed"}
                      borderBlockEnd={"2px solid #00A4BD"}
                      onChange={hanldeChange}
                      placeholder={"First Name"}
                    />
                  </FormControl>
                </Box>
                <Box width={"50%"}>
                  <FormControl>
                    <Input
                      type="text"
                      borderBlockEnd={"2px solid #00A4BD"}
                      name="last_name"
                      variant={"flushed"}
                      onChange={hanldeChange}
                      placeholder={"Last Name"}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired>
                <Input
                  type="email"
                  borderBlockEnd={"2px solid #00A4BD"}
                  name="email"
                  variant={"flushed"}
                  onChange={hanldeChange}
                  placeholder={"Email"}
                />
              </FormControl>
              <FormControl isRequired>
                <Input
                  type="number"
                  borderBlockEnd={"2px solid #00A4BD"}
                  name="phone_number"
                  variant={"flushed"}
                  onChange={hanldeChange}
                  placeholder={"Phone Number"}
                />
              </FormControl>
              <FormControl isRequired>
                <Input
                  type="password"
                  borderBlockEnd={"2px solid #00A4BD"}
                  name="password"
                  variant={"flushed"}
                  onChange={hanldeChange}
                  placeholder={"Password"}
                />
              </FormControl>
              <FormControl isRequired>
                <Input
                  type="text"
                  borderBlockEnd={"2px solid #00A4BD"}
                  name="company_name"
                  variant={"flushed"}
                  onChange={hanldeChange}
                  placeholder={"Company Name"}
                />
              </FormControl>
              <FormControl isRequired>
                <Input
                  type="text"
                  borderBlockEnd={"2px solid #00A4BD"}
                  name="website_URL"
                  variant={"flushed"}
                  onChange={hanldeChange}
                  placeholder={"Website URL"}
                />
              </FormControl>
              <FormControl isRequired>
                <Select
                  placeholder="How many employees work there?"
                  variant={"flushed"}
                  borderBlockEnd={"2px solid #00A4BD"}
                  name="employees"
                  onChange={hanldeChange}
                >
                  <option value="1">1</option>
                  <option value="2_to_5">2 to 5</option>
                  <option value="6_to_10">6 to 10</option>
                  <option value="11_to_25">11 to 25</option>
                  <option value="26_to_50">26 to 50</option>
                  <option value="51_to_200">51 to 200</option>
                  <option value="201_to_1000">201 to 1000</option>
                  <option value="1001_to_10000">1001 to 10000</option>
                  <option value="10000_or_more">10000 or more</option>
                </Select>
              </FormControl>
              <Text fontSize={"15px"} width={"30"}>
                We're committed to your privacy. HubSpot uses the information
                you provide to us to contact you about our relevant content,
                products, and services. You may unsubscribe from these
                communications at any time. For more information, check out our
                Privacy Policy.
              </Text>
              <Button
                w={"100%"}
                fontSize={"20px"}
                h={"60px"}
                bg={"#ff5c35"}
                color={"white"}
                _hover={{
                  bg: "gray.100",
                  color: "gray.700",
                }}
                type={"submit"}
              >
                Sign Up
              </Button>
            </VStack>
          </form>
        </VStack>
        <Box mt={44}>
          <VStack spacing={"5"} alignItems={"center"}>
            <Image
              src="https://static.hsappstatic.net/signup-ui-lego/static-1.7486/images/landing-page-headshot/landing-page-headshot@3x.png"
              width={"32"}
              display={"block"}
            />

            <Text fontSize={"20px"} fontWeight={"bold"}>
              HubSpot's CRM is 100% free.
            </Text>
            <Text>No credit card needed.</Text>
          </VStack>
        </Box>
      </Flex>
    </div>
  );
};

export default Signup;
