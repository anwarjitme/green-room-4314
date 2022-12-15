import {Tooltip,Box,MenuButton,Menu,MenuItem,Button,MenuList,Image,Stack,Avatar} from '@chakra-ui/react'

import {ChevronDownIcon,SearchIcon,SettingsIcon,BellIcon,CalendarIcon} from '@chakra-ui/icons'
import { ContactPage } from './ContactPage'


const Navbar=()=>{
    return (
    <Box mb='30px' position='-webkit-sticky' bg='#33475b' height="50px" >
       <Box display='flex' justifyContent='space-between'>
          <Box  display='flex'>
            <Box>
              <Image ml='10px' mt='7px' w='30px' src='https://seeklogo.com/images/H/hubspot-logo-A06A6E0DF5-seeklogo.com.png' />
            </Box>
               <Box>
                                                   <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                      >
                                        Contacts 
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >Contacts</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Companies</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Calls</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Activity Feed</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Lists</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>

               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                      >
                                        Conversations 
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >Inbox</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Chatflows</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Snippets</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Templates</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>
               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                      >
                                       Marketing 
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >Ads</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Email</MenuItem>
                                       
                                        <MenuItem bg='#33475b'  color='white'>Landing Pages</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Websites</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Social</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >SEO</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>
               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                      >
                                       Sales 
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >Deals</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Forecast</MenuItem>
                                       
                                        <MenuItem bg='#33475b'  color='white'>Tasks</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Documents</MenuItem>
                                        <MenuItem bg='#33475b' color='white' >meetings</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Payments</MenuItem>
                                       
                                        <MenuItem bg='#33475b'  color='white'>Playbooks</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Quotes</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>
               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                      >
                                       Service 
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >Tickets</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Feedback Survey</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Knowledge Base</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Customer Portal</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>
               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                      >
                                       Animation 
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >Sequences</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Workflows</MenuItem>
                                       
                                      </MenuList>
                                    </Menu>
               </Box>
               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                      >
                                       Reports
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >Analytic Tools</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Dashboards</MenuItem>
                                       
                                        <MenuItem bg='#33475b'  color='white'>Reports</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Data Management</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>

          </Box>

          <Box display='flex'>
                 <Box>
                       <Tooltip hasArrow label='Search places' bg='gray.300' color='black'>
                           <Button borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                       bg='#33475b'
                                       > <SearchIcon color='white' /></Button>  
                       </Tooltip>
                 </Box>
                 <Box>
                             <Tooltip hasArrow label='Search places' bg='gray.300' color='black'>
                             <Button borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                       bg='#33475b'
                                       > <CalendarIcon color='white' />
                                       </Button>
                              </Tooltip>
                 </Box>
                 <Box>
                      <Tooltip hasArrow label='Search places' bg='gray.300' color='black'>
                      <Button borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                       bg='#33475b'
                                       > <SettingsIcon color='white' />
                                       </Button>
                      </Tooltip>
                 </Box>
                 <Box>
                     <Tooltip hasArrow label='Search places' bg='gray.300' color='black'>
                     <Button borderWidth='0px'
                                        _hover={{ color: 'red',bg:'#2e3f50' }}
                                       color='white'
                                       bg='#33475b'
                                       >   <BellIcon color='white' />
                                       </Button>
                      </Tooltip>
                 </Box>
                 {/* <Box>
                 <Stack direction='row'>
                        
                        <Avatar src='https://bit.ly/broken-link' />
                  </Stack>
                   
                  </Box>  */}
          </Box>

        </Box> 
       
    </Box>
    )
}

export {Navbar}