import {
  Box,
  Button,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  FormLabel,
  Input,
  Select,
  Tabs,
  Tab,
  TabList,
} from "@chakra-ui/react";
import { ChevronDownIcon, ExternalLinkIcon, LockIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ContactItem } from "./ContactItem";
import { useState } from "react";
import { postcontact } from "../../Redux/contact/action";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { Pagination } from "./Pagination";
const ContactPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [Lifecycle, setLifecycle] = useState();
  const [LeadStatus, setLeadStatus] = useState();
  const [contactowner, setcontactowner] = useState("");
  const toast = useToast();
  let neme = JSON.parse(localStorage.getItem("userData"));

  const contacts = useSelector((store) => store.contact.contacts);
  const dispatch = useDispatch();

  const handleAdd = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    dispatch(
      postcontact(
        email,
        firstName,
        lastName,
        jobTitle,
        phone,
        Lifecycle,
        LeadStatus,
        contactowner
      )
    ).then(() => {
      dispatch(postcontact);
    });
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" w="90%" m="auto">
        <Box>
          <Heading as="h1" color="#0091ae" size="md">
            Contacts
            {/* <TriangleDownIcon  /> */}
          </Heading>
          <Text>{contacts.length} Records</Text>
        </Box>
        <Box alignItems="center" justifyContent="center" gap="2" display="flex">
          <LockIcon color="#0091ae" />{" "}
          <Heading color="#0091ae" as="text" size="sm">
            Data Quality
          </Heading>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              bg="white"
              color="#ff7a59"
              borderRadius="0"
              border="1px solid #ff7a59"
            >
              Actions <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem color="#33475b" bg="white">
                Edit properties
              </MenuItem>
              <MenuItem color="#33475b" bg="white">
                Manage duplicates <LockIcon />
              </MenuItem>
              <MenuItem color="#33475b" bg="white">
                Fix formatting issue
                <LockIcon />
              </MenuItem>
              <MenuItem color="#33475b" bg="white">
                Restore records <ExternalLinkIcon />
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            bg="white"
            color="#ff7a59"
            borderRadius="0"
            border="1px solid #ff7a59"
          >
            import
          </Button>
          {/* <Button  border='1px solid #ff7a59' borderRadius='0' _hover='#ff7a59' bg='#ff7a59'>Create contact</Button> */}
          <Button
            border="1px solid #ff7a59"
            borderRadius="0"
            color="white"
            _hover="#ff7a59"
            bg="#ff7a59"
            onClick={onOpen}
          >
            Create contact
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
            size="md"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                Create a new account
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="username">Email</FormLabel>
                    <Input
                      ref={firstField}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="username">First name</FormLabel>
                    <Input
                      ref={firstField}
                      value={firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                      type="text"
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="username">Last name</FormLabel>
                    <Input
                      ref={firstField}
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                      type="text"
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="owner">Contact Owner</FormLabel>
                    <Select
                      onChange={(e) => setcontactowner(e.target.value)}
                      id="owner"
                      defaultValue=""
                    >
                      <option value=""></option>
                      <option>{neme.first_name + " " + neme.last_name}</option>
                    </Select>
                  </Box>
                  <Box>
                    <FormLabel htmlFor="username">Job title</FormLabel>
                    <Input
                      ref={firstField}
                      value={jobTitle}
                      onChange={(e) => setjobTitle(e.target.value)}
                      type="text"
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="username">Phone number</FormLabel>
                    <Input
                      ref={firstField}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="owner">Lifecycle stage</FormLabel>
                    <Select
                      onChange={(e) => setLifecycle(e.target.value)}
                      id="owner"
                      defaultValue=""
                    >
                      <option value=""></option>
                      <option>Sales Qualified Lead</option>
                      <option>Customer</option>
                      <option>Lead</option>
                      <option>Subscriber</option>
                      <option>Marketing Qualified Lead</option>
                      <option>Evangelist</option>
                      <option>Other</option>
                    </Select>
                  </Box>
                  <Box>
                    <FormLabel htmlFor="owner">Lead status</FormLabel>
                    <Select
                      onChange={(e) => setLeadStatus(e.target.value)}
                      id="owner"
                      defaultValue=""
                    >
                      <option value=""></option>
                      <option>New</option>
                      <option>Open</option>
                      <option>In progress</option>
                      <option>open deal</option>
                      <option>unqualified</option>
                      <option>Connected</option>
                      <option>Bad timing</option>
                    </Select>
                  </Box>
                </Stack>
              </DrawerBody>

              <DrawerFooter justifyContent="space-around" borderTopWidth="1px">
                <Button
                  border="1px solid #ff7a59"
                  borderRadius="0"
                  color="white"
                  _hover="#ff7a59"
                  bg="#ff7a59"
                  onClick={handleAdd}
                >
                  Create{" "}
                </Button>
                <Button
                  border="1px solid #ff7a59"
                  borderRadius="0"
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>

      <Box w="90%" m="auto">
        <Tabs mt="20px" isFitted variant="enclosed">
          <TabList gap="1">
            <Tab bg="#C4F1F9" _selected={{ color: "black", bg: "white" }}>
              All contacts
            </Tab>
            <Tab bg="#C4F1F9" _selected={{ color: "black", bg: "white" }}>
              My contacts
            </Tab>
            <Tab bg="#C4F1F9" _selected={{ color: "black", bg: "white" }}>
              Marketing contacts
            </Tab>
            <Tab bg="#C4F1F9" _selected={{ color: "black", bg: "white" }}>
              My uncontacted
            </Tab>
            <Tab bg="#C4F1F9" _selected={{ color: "black", bg: "white" }}>
              Unassigned contacts
            </Tab>
            <Tab bg="#C4F1F9" _selected={{ color: "black", bg: "white" }}>
              Needs next action
            </Tab>
          </TabList>
          {/* <TabPanels>
                    <TabPanel>
                      <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                      <p>two!</p>
                    </TabPanel>
                  </TabPanels> */}
        </Tabs>
      </Box>
      <Box mt="20px">
        <ContactItem />
        {/* <Pagination/> */}
      </Box>
    </Box>
  );
};
export { ContactPage };
// #7fd1de
//hover #007a8c
