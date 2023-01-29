import {
  Text,
  Tooltip,
  Box,
  MenuButton,
  Menu,
  MenuItem,
  Button,
  MenuList,
  Image,
  Stack,
  Avatar,
  Heading,
  Spacer,
} from "@chakra-ui/react";

import {
  ChevronDownIcon,
  SearchIcon,
  SettingsIcon,
  BellIcon,
  CalendarIcon,
} from "@chakra-ui/icons";
import { ContactPage } from "./ContactPage";
import { RxAvatar } from "react-icons/rx";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  let neme = JSON.parse(localStorage.getItem("userData"));
 
  console.log(neme);
  const handleLogout = (id) => {
    // console.log(id)
    // neme.splice(id,1);
    // localStorage.setItem("userData",JSON.stringify("neme"));
    // neme1.splice(id,1);
    // localStorage.setItem("userToken",JSON.stringify("neme1"));
    localStorage.removeItem("userToken");
      localStorage.removeItem("userData");
      // window.location.reload(true)
    navigate("/");
    window.location.reload(false)
  };

  return (
    <Box
      mb="30px"
      position="sticky"
      top="0"
      zIndex="1000"
      bg="#33475b"
      height="50px"
    >
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Box>
          <Link to="/">
          <Image
              ml="10px"
              mt="7px"
              w="20px"
              src="https://seeklogo.com/images/H/hubspot-logo-A06A6E0DF5-seeklogo.com.png"
            />
          </Link>
           
          </Box>
          <Box>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="2px"
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
              >
                Contacts
              </MenuButton>
              <MenuList bg="#33475b">
                <MenuItem bg="#33475b" color="white">
                  <Link to="/dashboard/contact">Contacts</Link>
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  {" "}
                  <Link to="/dashboard/company">Companies</Link>
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Calls
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Activity Feed
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Lists
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Box>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="2px"
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
              >
                Conversations
              </MenuButton>
              <MenuList bg="#33475b">
                <MenuItem bg="#33475b" color="white">
                  Inbox
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Chatflows
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Snippets
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Templates
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="2px"
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
              >
                Marketing
              </MenuButton>
              <MenuList bg="#33475b">
                <MenuItem bg="#33475b" color="white">
                  Ads
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Email
                </MenuItem>

                <MenuItem bg="#33475b" color="white">
                  Landing Pages
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Websites
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Social
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  SEO
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="2px"
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
              >
                Sales
              </MenuButton>
              <MenuList bg="#33475b">
                <MenuItem bg="#33475b" color="white">
                  Deals
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Forecast
                </MenuItem>

                <MenuItem bg="#33475b" color="white">
                  Tasks
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Documents
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  meetings
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Payments
                </MenuItem>

                <MenuItem bg="#33475b" color="white">
                  Playbooks
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Quotes
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="2px"
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
              >
                Service
              </MenuButton>
              <MenuList bg="#33475b">
                <MenuItem bg="#33475b" color="white">
                  Tickets
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Feedback Survey
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Knowledge Base
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Customer Portal
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="2px"
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
              >
                Animation
              </MenuButton>
              <MenuList bg="#33475b">
                <MenuItem bg="#33475b" color="white">
                  Sequences
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Workflows
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="2px"
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
              >
                Reports
              </MenuButton>
              <MenuList bg="#33475b">
                <MenuItem bg="#33475b" color="white">
                  Analytic Tools
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Dashboards
                </MenuItem>

                <MenuItem bg="#33475b" color="white">
                  Reports
                </MenuItem>
                <MenuItem bg="#33475b" color="white">
                  Data Management
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        <Box display="flex">
          <Box>
            <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
              <Button
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
                bg="#33475b"
              >
                {" "}
                <SearchIcon color="white" />
              </Button>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
              <Button
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
                bg="#33475b"
              >
                {" "}
                <CalendarIcon color="white" />
              </Button>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
              <Button
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
                bg="#33475b"
              >
                {" "}
                <SettingsIcon color="white" />
              </Button>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
              <Button
                borderWidth="0px"
                _hover={{ color: "red", bg: "#2e3f50" }}
                color="white"
                bg="#33475b"
              >
                {" "}
                <BellIcon color="white" />
              </Button>
            </Tooltip>
          </Box>
          <Box>
            {/* <Stack direction='row'>
                        
                        <Avatar w='60%' borderRadius='90px' src='https://bit.ly/broken-link' />
                      
                  </Stack>
                    */}
            <Heading mt="7px" as="h2" color="white" size="lg">
              {" "}
              <RxAvatar />
            </Heading>
          </Box>

          <Box>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="2px"
                borderWidth="0px"
                _hover={{ bg: "#2e3f50" }}
                color="white"
              >
              {neme.map((el)=>{
                return (
                  <>
                  <p>{el.first_name}-{el.last_name}</p>
                  
                  </>
                 
                  
               
                )
              })}
                {/* {neme.first_name}
                {neme.last_name} */}
              </MenuButton>
              <MenuList bg="#33475b">
              {neme.map((el)=>{
                return (
                  <>
                  <MenuItem bg="#33475b" onClick={()=>handleLogout(el._id)} color="white">
                  LogOut
                </MenuItem>
                  
                  </>
                 
                  
               
                )
              })}
               
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Navbar };
