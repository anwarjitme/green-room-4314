import {
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Redux/UserLogin/UserLogin.action";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { isAuth, isError } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  const hendelSubmin = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email: email, password: password }));
    if (isAuth) {
      toast({
        title: "Success",
        description: "Log In",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };
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
  return (
    <div>
      <Container
        // border={"1px solid red"}
        alignItems={"center"}
        display={"flex"}
        gap={"25px"}
        flexDir={"column"}
        mt={"12"}
        maxW={"30%"}
      >
        <Image
          src="https://static.hsappstatic.net/ui-images/static-2.446/optimized/hubspot-wordmark.svg"
          w={"40%"}
        />
        <Text fontSize={"16px"}>
          Don't have an account?
          <Link style={{ color: "#527a8c", fontWeight: "bold" }} to={"/signup"}>
            Sign up
          </Link>
        </Text>
        <form style={{ width: "100%" }} onSubmit={hendelSubmin}>
          <VStack spacing={"10"}>
            <FormControl isRequired>
              <FormLabel mb={"20px"}>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                borderColor={"blackAlpha.600"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  borderColor={"blackAlpha.600"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    size={"20"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              w={"100%"}
              disabled={email === "" || password === ""}
              fontSize={"20px"}
              h={"50px"}
              bg={"#ff5c35"}
              color={"white"}
              _hover={{
                bg: "gray.100",
                color: "gray.700",
              }}
              type={"submit"}
            >
              Log In
            </Button>
          </VStack>
        </form>
        <Divider size={"20"} />
        <Button w={"full"} colorScheme={"blue"} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Container>
    </div>
  );
};

export default Login;
