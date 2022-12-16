import React from "react";
import "../Components/single_contact/single_contact.css"
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
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
 
  MenuDivider,
  StackDivider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  InputGroup,
  Input,
  InputRightAddon,
 
  
  
} from "@chakra-ui/react";
import {
  Website_activity,
  Collapse_about,
  Collapse_communication,
} from "../Components/single_contact/collaps1";
import { Divider } from "@chakra-ui/react";
// import Drawer_Right from "../Components/single_contact/Drower_right"
import  { Company,Deals,Tickets } from "../Components/single_contact/collapce_right"

const Single_contact = () => {

  return (
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
            <img
              className="profile-img"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAQlBMVEX///+ZmZmrq6uPj4+Tk5OWlpb19fXs7Ozw8PDQ0ND8/Pz5+fm7u7uMjIzMzMzJycmhoaGxsbHi4uLW1tbDw8Pc3NyOLk0uAAADwklEQVR4nO1a6dKqMAy1GyCbBeX9X/Ui6sjSHNKCX2fu9Px0LDlNkzRJc7kkJCQkJCQkJCQEo8qKfEKRVX8tu8yvdWetUc0IZazt6mte/pX0vO200saIGYwZf+ra/A+k34Rayp6zUOL2Ww69NNot/ANtZP9D8YrY+0IP6kcUcpb4N4XzDyKrG6b4iUJTZ+fKv4uds19Di/uJ4svaU/xEoT4tMBQ2QP7IwBbnyB+0x+nPYfRwhvxr0PbfSrieIF+FyxdCHWZwTP5xBkflH2Uw7J4/dTF9ccQSCyx/9A4rpRU7F5QO9sbSou1pceunTKjqbzBOGhsakVD803ah2QHFKl2Hyb+jbz5Wuyof6N9B90IGtOr6IuIrQu5GcADuAAdCZsgh5A39uYd7CTiFxj9DkaQHkFYNvMZIX/kDHQLpyALilvINR7QChCTdupTkIl8V9EABILgDO1R+qTJQQANcKqMt108FOYrBaCFYZnwc4UarEu8EaE7fPAigjXRoYRequiVykIaEE1D8M2hBWA8+AqFbNgGoSItWWrAQ626OEmY4DejHVLQbPlXATUyQCeDLHV7JfCPApQjSJDw7fplS40xXkxvJcXZquFkB3gfwA+QDgm+FFX2nvVVA+BPy3gmS10/MkC+9GDhvtn63irG81LDYr8aNg0HPWMYrUbAXvnWwMWhOFc/0Q5COzhgsG2G55HQRmKkpi8BYlcqhmEJbWQxyv0Y9ncCzHShkN0IKbgPxZAITCcPbux8BhhEardUCmtPJYhrhrhtqZbu2z7MZ8r7trNozRKYb7gQiLereGdGqvt7ppzIDEQzFxrQoH2ihSTBDMbqMVL3zjaqmLYidEpHXsXGF4DV6Ugns65iKqobX/C2oIpmdkBB+aJg2NFqxmwE7JaOSUnafhejusJNStxXSmdgWztyMn5Y7Uxu/xrfLjDwKE4cRGFiPbOEwA4/SzFGc+hzAtAeHCjyWb8pzj/N7Y2NHXuX5pkHhTkMRNimqV4NineEbujFFodx8wmv5qklFtSYRVm1LzybVSgVNQMu/WCRW3p3KZaPSBHT8y8UWvBuVCxX4N1pP+MI8NfV3wifmjhjQrJ63602ADY5W+CUQ9GYyu9IOEwh6sJj1W44SCHuymR3CQQKhj1bfB4hjBMKf7b4Pl1YG4FNehD9czp5ATAA+8g8NEcR+vI7/fB9/gCH+CEf8IZb4YzzxB5ku0Ue5LvGH2S7Rx/meiDzQ+KIQdaTzichDrS8OUcd6X4g72PxBzNHuhISEhISEhIT/Cf8AaMIrYS5bSmgAAAAASUVORK5CYII="
              alt="profile-img"
            />
            <div className="profile-text">
              <h1 className="profile-name">Anwar Hossain</h1>
              <h3>MERN developer</h3>
              <small>
                anwar@gmail.com <CopyIcon />
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
                    <p>one!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Divider />
      </div>
      <div className="right">
    <Company/>
    <Deals/>
    <Tickets/>
      </div>

    </div>
  );
};

export default Single_contact;

