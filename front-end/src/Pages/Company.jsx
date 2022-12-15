import {Box, Button, Heading,Text,Menu,MenuButton,MenuItem,MenuList,Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
Stack,FormLabel,Input,Select,Tabs,Tab,TabList} from '@chakra-ui/react'
import { ChevronDownIcon,ExternalLinkIcon,LockIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import React, { useReducer } from 'react'
//AddIcon,UnlockIcon,TriangleDownIcon
//InputGroup,InputLeftAddon,InputRightAddon,Textarea,TabPanel,TabPanels
const Company=()=>{

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
     const [data,setdata]=useReducer()

 return (
   <Box>
           <Box   display='flex' justifyContent='space-between' w='90%'  m='auto'>
                <Box>
                    <Heading 
                              as='h1' color='#0091ae' size='md'>Company
                               {/* <TriangleDownIcon  /> */}
                               </Heading>
    <Text>Records</Text>
                </Box>
                <Box alignItems='center' justifyContent='center'   gap='2' display='flex'>
                    <LockIcon color='#0091ae' />  <Heading  color='#0091ae' as='text' size='sm'>Data Quality</Heading>
                    
                   <Menu>
                    <MenuButton
                                        px={4}
                                        py={2}
                                        bg='white' color='#ff7a59' borderRadius='0' border='1px solid #ff7a59'>Actions <ChevronDownIcon/>
                                      </MenuButton>
                                      <MenuList  >
                                        <MenuItem  color='#33475b' bg='white' >Edit properties</MenuItem>
                                        <MenuItem color='#33475b'  bg='white'>Manage duplicates <LockIcon/></MenuItem>
                                        <MenuItem  color='#33475b' bg='white' >Fix formatting issue<LockIcon/></MenuItem>
                                        <MenuItem  color='#33475b' bg='white'>Restore records <ExternalLinkIcon /></MenuItem>
                                      </MenuList>
                                    </Menu>





                    <Button bg='white' color='#ff7a59' borderRadius='0' border='1px solid #ff7a59'>import</Button>
                    {/* <Button  border='1px solid #ff7a59' borderRadius='0' _hover='#ff7a59' bg='#ff7a59'>Create contact</Button> */}

                    <Button border='1px solid #ff7a59' borderRadius='0' color='white' _hover='#ff7a59' bg='#ff7a59' onClick={onOpen}>
                    Create contact
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size='md'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px' bg="#c4f1f9">
          Create company
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>Company domain name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>Company name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>Company owner</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
              <Box>
                <FormLabel htmlFor='owner'>Industry</FormLabel>
                <Select id='owner' >
                <option value=''></option>
                  <option value='Accounting'>Accounting</option>
                  <option value='Airlines/Avigation'>Airlines/Avigation</option>
                  <option value='Automation'>Automation</option>
                  <option value='Banking'>Banking</option>
                  <option value='Networking<'>Networking</option>
                  <option value='wireless'>wireless</option>
                  <option value='Other'>Other</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor='owner'>Type</FormLabel>
                <Select id='owner' >
                <option value='Prospect'>Prospect</option>
                  <option value='Patner'>Patner</option>
                  <option value='Reseller'>Reseller</option>
                  <option value='Vendor'>Vendor</option>
                  <option value='Other'>Other</option>
                  
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor='username'>City</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>State/Region</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>Postal code</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>Number of employees</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>Anuall reveneu</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>Timezone</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>Description</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>Linkedln company page</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                 
                />
              </Box>
            
             
              {/* <Box>
                <FormLabel htmlFor='url'>Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type='url'
                    id='url'
                    placeholder='Please enter domain'
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box> */}

              {/* <Box>
                <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor='desc'>Description</FormLabel>
                <Textarea id='desc' />
              </Box> */}
            </Stack>
          </DrawerBody>

          <DrawerFooter justifyContent='space-around' borderTopWidth='1px'>
           
            <Button border='1px solid #ff7a59' borderRadius='0' color='white' _hover='#ff7a59' bg='#ff7a59'>Create</Button>
            <Button border='1px solid #ff7a59' borderRadius='0' variant='outline' mr={3}bg='#ff7a59' color="white" onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


                </Box>
           </Box>
           
           <Box  w='90%' m='auto' >
           <Tabs mt='20px' isFitted variant='enclosed'>
                  <TabList   gap='1' mb='1em'>
                    <Tab  bg='#C4F1F9' _selected={{ color: 'black', bg: 'white' }}>All company</Tab>
                    <Tab bg='#C4F1F9' _selected={{ color: 'black', bg: 'white' }}>My company</Tab>
                    <Tab bg='#C4F1F9' _selected={{ color: 'black', bg: 'white' }}>Marketing company</Tab>
                    <Tab bg='#C4F1F9' _selected={{ color: 'black', bg: 'white' }}>My company</Tab>
                    <Tab bg='#C4F1F9' _selected={{ color: 'black', bg: 'white' }}>Unassigned company</Tab>
                    <Tab bg='#C4F1F9' _selected={{ color: 'black', bg: 'white' }}>Needs next action</Tab>
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


           </Box>
  
 )
}
export default Company

// #7fd1de
//hover #007a8c
