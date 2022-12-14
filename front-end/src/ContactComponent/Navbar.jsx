import {Box,MenuButton,Menu,MenuItem,Button,MenuList} from '@chakra-ui/react'

import {ChevronDownIcon} from '@chakra-ui/icons'



const Navbar=()=>{
    return (
    <Box bg='#33475b' height="50px" >
       <Box display='flex' justifyContent='space-between'>
          <Box  display='flex'>
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
                                        File <ChevronDownIcon />
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >New File</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>New Window</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Open...</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Save File</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>

               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        // borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red' }}
                                       color='white'
                                      >
                                        File <ChevronDownIcon />
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >New File</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>New Window</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>Open...</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Save File</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>
               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        // borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red' }}
                                       color='white'
                                      >
                                        File <ChevronDownIcon />
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >New File</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>New Window</MenuItem>
                                       
                                        <MenuItem bg='#33475b'  color='white'>Open...</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Save File</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>
               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        // borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red' }}
                                       color='white'
                                      >
                                        File <ChevronDownIcon />
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >New File</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>New Window</MenuItem>
                                       
                                        <MenuItem bg='#33475b'  color='white'>Open...</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Save File</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>
               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        // borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red' }}
                                       color='white'
                                      >
                                        File <ChevronDownIcon />
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >New File</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>New Window</MenuItem>
                                       
                                        <MenuItem bg='#33475b'  color='white'>Open...</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Save File</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>
               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        // borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red' }}
                                       color='white'
                                      >
                                        File <ChevronDownIcon />
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >New File</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>New Window</MenuItem>
                                       
                                        <MenuItem bg='#33475b'  color='white'>Open...</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Save File</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>
               <Box>
               <Menu>
                                      <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        // borderRadius='2px'
                                        borderWidth='0px'
                                        _hover={{ color: 'red' }}
                                       color='white'
                                      >
                                        File <ChevronDownIcon />
                                      </MenuButton>
                                      <MenuList bg='#33475b' >
                                        <MenuItem bg='#33475b' color='white' >New File</MenuItem>
                                        <MenuItem bg='#33475b'  color='white'>New Window</MenuItem>
                                       
                                        <MenuItem bg='#33475b'  color='white'>Open...</MenuItem>
                                        <MenuItem bg='#33475b'  color='white' >Save File</MenuItem>
                                      </MenuList>
                                    </Menu>
               </Box>

          </Box>

          <Box>
            hi
          </Box>

        </Box> 
    </Box>
    )
}

export {Navbar}