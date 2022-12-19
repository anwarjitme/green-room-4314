import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  InputGroup,
  Input,
  InputRightAddon,
  Avatar,
  Button,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  Text,
  Box,
} from "@chakra-ui/react";
import "../Components/single_contact/single_contact.css";
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  ChevronLeftIcon,
  EditIcon,
  EmailIcon,
  PhoneIcon,
  CalendarIcon,
  TimeIcon,
  DragHandleIcon,
  CopyIcon,
  Search2Icon,
} from "@chakra-ui/icons";

import {
  Website_activity,
  Collapse_about,
  Collapse_communication,
} from "../Components/single_contact/collaps1";
import { Divider } from "@chakra-ui/react";
import {
  Company,
  Deals,
  Tickets,
} from "../Components/single_contact/collapce_right";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../Redux/contact/action";
import { Navbar } from "../Components/ContactComponent/Navbar";
const Single_contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const { id } = useParams();
  const contacts = useSelector((store) => store.contact.contacts);

  const [currentContact, setCurrentContact] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(getContact());
    }
  }, [contacts.length, dispatch]);
  useEffect(() => {
    if (id) {
      const contact = contacts.find((item) => item.id === Number(id));
      contact && setCurrentContact(contact);
    }
  }, [id, contacts]);
  const x = new Date();
  const handleAdd = () => {
    const newText = {
      name: text,
      createdate: x.toDateString(),
    };
    setNotes([...notes, newText]);
  };
  console.log(text);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left">
          <header className="header">
            <Button colorScheme="teal" variant="link">
              <ChevronLeftIcon /> Contacts
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                variant="link"
                rightIcon={<ChevronDownIcon />}
              >
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Unfollow</MenuItem>
                <MenuItem>View all properties</MenuItem>
                <MenuItem>View property history</MenuItem>
                <MenuItem>View association history</MenuItem>
                <MenuItem>
                  Search in Google <ExternalLinkIcon />
                </MenuItem>
                <MenuItem>Opt out for email</MenuItem>
                <MenuItem>
                  Restore activity <ExternalLinkIcon />
                </MenuItem>
                <MenuItem>Marge</MenuItem>
                <MenuItem>Delete</MenuItem>
              </MenuList>
            </Menu>
          </header>
          <div className="glob-text">
            <p>Contact has bounced globally.</p>
          </div>
          <div className="profile">
            <div className="profile-up">
              <Avatar
                color="white"
                bg="#7c98b6"
                className="profile-img"
                name={currentContact.firstName}
                src="https://bit.ly/broken-link"
              />
              <div className="profile-text">
                <h1 className="profile-name">{currentContact.firstName}</h1>
                <h3>{currentContact.jobTitle}</h3>
                <small>
                  {currentContact.email}
                  <CopyIcon ml={2} bg="teal.300" />
                </small>
              </div>
            </div>
            <div className="profile-down">
              <div className="p-icons">
                <Tooltip label="Create a note" aria-label="A tooltip">
                  <EditIcon />
                </Tooltip>
              </div>
              <div className="p-icons">
                <Tooltip label="Create a email" aria-label="A tooltip">
                  <EmailIcon />
                </Tooltip>
              </div>
              <div className="p-icons">
                <Tooltip label="Make a phone call" aria-label="A tooltip">
                  <PhoneIcon />
                </Tooltip>
              </div>
              <div className="p-icons">
                <Tooltip label="Create a task" aria-label="A tooltip">
                  <CalendarIcon />
                </Tooltip>
              </div>
              <div className="p-icons">
                <Tooltip label="Shedule a meeting" aria-label="A tooltip">
                  <TimeIcon />
                </Tooltip>
              </div>
              <div className="p-icons">
                <Tooltip label="More options" aria-label="A tooltip">
                  <DragHandleIcon />
                </Tooltip>
              </div>
            </div>
          </div>
          <Divider orientation="horizontal" />
          <Collapse_about />
          <Divider orientation="horizontal" />
          <Collapse_communication />
          <Divider orientation="horizontal" />
          <Website_activity />
          <Divider orientation="horizontal" />
        </div>
        <div className="middle">
          <Tabs maxW="95%" m="auto" pt="5" variant="enclosed">
            <TabList>
              <Tab bg="#eaf0f6">Activities</Tab>
              <Tab>Overview</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex justifyContent="space-between">
                  <InputGroup py={3} maxW="45%" size="sm">
                    <Input bg="white" py={5} placeholder="Search activities" />
                    <InputRightAddon py={5} children={<Search2Icon />} />
                  </InputGroup>
                  <Menu>
                    <MenuButton
                      mt={3}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Collapse all
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Collapse all</MenuItem>
                      <MenuItem>Expand all</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <Tabs>
                  <TabList>
                    <Tab>Activity</Tab>
                    <Tab>Notes</Tab>
                    <Tab>Emails</Tab>
                    <Tab>Calls</Tab>
                    <Tab>Tasks</Tab>
                    <Tab>Meeting</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Flex
                        justifyContent={"space-between"}
                        p={5}
                        my={15}
                        bg={"white"}
                        width={"90%"}
                      >
                        <Text
                          color={"teal"}
                        >{`${currentContact.firstName}`}</Text>

                        <Text color={"#7c98b6"}>
                          updated the lifecycle stage for this contact to Lead.
                        </Text>
                      </Flex>
                    </TabPanel>
                    <TabPanel>
                      <>
                        <Button
                          float="right"
                          bg="#425b76"
                          color="white"
                          onClick={onOpen}
                        >
                          Create Note
                        </Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader bg={"#425b76"} color="white">
                              Note
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                              <Textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                height={200}
                                placeholder="Start typing to leave a note..."
                              ></Textarea>
                            </ModalBody>
                            <Img
                              maxW={"90%"}
                              margin="auto"
                              src="/Images/note.png"
                              alt="ok"
                            />
                            <ModalFooter>
                              <Button
                                onClick={handleAdd}
                                colorScheme="blue"
                                mr={3}
                              >
                                Save
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </>
                      <Box>
                        {notes.map((item) => (
                          <Flex
                            justifyContent={"space-between"}
                            p={5}
                            my={15}
                            bg={"white"}
                            width={"90%"}
                          >
                            <Text>{item.name}</Text>
                            <Text color={"#7c98b6"}>{item.createdate}</Text>
                          </Flex>
                        ))}
                      </Box>
                    </TabPanel>
                    <TabPanel>
                      <p>No data found</p>
                    </TabPanel>
                    <TabPanel>
                      <p>No data found</p>
                    </TabPanel>
                    <TabPanel>
                      <>
                        <Button
                          float="right"
                          bg="#425b76"
                          color="white"
                          onClick={onOpen}
                        >
                          Create Task
                        </Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader bg={"#425b76"} color="white">
                              Task
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                              <Textarea
                                height={200}
                                placeholder="Start typing to leave a note..."
                              ></Textarea>
                            </ModalBody>
                            <Img
                              maxW={"90%"}
                              margin="auto"
                              src="/Images/note.png"
                              alt="ok"
                            />
                            <ModalFooter>
                              <Button colorScheme="blue" mr={3}>
                                Save
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <Img src="/images/noData.png" alt="noData" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div className="right">
          <Company />
          <Deals />
          <Tickets />
        </div>
      </div>
    </>
  );
};

export default Single_contact;
