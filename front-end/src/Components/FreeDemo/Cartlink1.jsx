import React from 'react'
import { Box, Container, Flex,Image,Grid,GridItem,Text, Heading,Divider, Button} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {useNavigate,Link} from "react-router-dom"
const Cartlink1 = () => {
     const navigator=useNavigate();
    const free=()=>
    {
        navigator("/freedemo")
    }
    const demo=()=>
    {
        navigator("/signup") 
    }
  return (

<>
<Box border="1px solid none" w="100%" h="60px" position="sticky" top="0" bg="white"   >
           <Flex justifyContent="space-between" p="15px"  >
            <Box border="1px solid none" w="120px" h="40px" marginLeft="10%" >
            <Link to="/">
                   <Image src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMzguNjU5NjEgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzOC42NTk2MSA5NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBvbHlnb24gZmlsbD0iIzIxMzM0MyIgcG9pbnRzPSIzNi42NzcyNSw1NC4zMzIxOSAxMS44MDkxOCw1NC4zMzIxOSAxMS44MDkxOCw4MC41Mjg1OSAwLDgwLjUyODU5IDAsMTUuODkwODMgMTEuODA5MTgsMTUuODkwODMgCgkJMTEuODA5MTgsNDIuOTcxMDMgMzYuNjc3MjUsNDIuOTcxMDMgMzYuNjc3MjUsMTUuODkwODMgNDguNDgzNzgsMTUuODkwODMgNDguNDgzNzgsODAuNTI4NTkgMzYuNjc3MjUsODAuNTI4NTkgCSIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTg2LjI2OTM2LDU5LjYzNjM0YzAsNS4zODM0NC00LjM4NTMxLDkuNzYzNzUtOS43Njc1NSw5Ljc2Mzc1Yy01LjM4MzY4LDAtOS43NjYxNi00LjM4MDMxLTkuNzY2MTYtOS43NjM3NQoJCXYtMjcuNjg0OUg1NS41NTMzOXYyNy42ODQ5YzAsMTEuNTUwMjUsOS4zOTc2NCwyMC45NDU1OCwyMC45NDg0MiwyMC45NDU1OGMxMS41NDg0MiwwLDIwLjk0NjA1LTkuMzk1MzMsMjAuOTQ2MDUtMjAuOTQ1NTgKCQl2LTI3LjY4NDloLTExLjE3ODVWNTkuNjM2MzR6Ii8+Cgk8cGF0aCBmaWxsPSIjMjEzMzQzIiBkPSJNMTY5LjI0NTU2LDM0LjgwMTljMC01LjY3NjIxLDMuNzU2OTktNy40NzYxNSw3Ljg3MDI1LTcuNDc2MTVjMy4zMTIwMSwwLDcuNjk0NzIsMi41MjA2OSwxMC41NTQyNCw1LjU4MzYxCgkJbDcuMzMzMjUtOC42NDQ0Yy0zLjY2NDUxLTQuOTUxMi0xMS4wODc5MS04LjM3NDEzLTE3LjE3MDc1LTguMzc0MTNjLTEyLjE2NzMxLDAtMjAuOTMzODUsNy4xMTQyNC0yMC45MzM4NSwxOC45MTEwNgoJCWMwLDIxLjg4MDQ2LDI2Ljc0ODIsMTQuOTQ0NzksMjYuNzQ4MiwyNy4xOTQwNGMwLDMuNzc3NTMtMy42NjYzOCw3LjExMjM2LTcuODY5MzQsNy4xMTIzNgoJCWMtNi42MjE3LDAtOC43Njk2MS0zLjI0MTc0LTExLjgwOTg2LTYuNjY0bC04LjE0MTgyLDguNDYyNzJjNS4xOTEyMiw2LjM5MzczLDExLjYzMDA4LDkuNjM3MzYsMTkuMzIzNjUsOS42MzczNgoJCWMxMS41Mzk0OSwwLDIwLjg0MzI1LTcuMjA0MDUsMjAuODQzMjUtMTguNDYxNDlDMTk1Ljk5MjgsMzcuNzcxNDgsMTY5LjI0NTU2LDQ1LjMzNjI3LDE2OS4yNDU1NiwzNC44MDE5eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTMzNC43MjA0OSw3MC4yMDI3OGMtNi42MTY5NywwLTguNDk1MDYtMi44NjA5Ni04LjQ5NTA2LTcuMjQ1OThWNDMuNTQ2NThoMTAuMjg0ODJ2LTkuODM4OTJoLTEwLjI4NDgyCgkJVjIwLjczNTE1bC0xMS4zNTc3OSw1LjA5ODI2djM5LjUzOTMxYzAsMTAuMTA5Myw2Ljk3NDY0LDE1LjIwOTIsMTYuNTQyNjYsMTUuMjA5MmMxLjQzMTIxLDAsMy40MDEyMS0wLjA5MjQ4LDQuNDc1NjgtMC4zNTc2NgoJCWwyLjc3MzYyLTEwLjE5NzA2QzMzNy40MDc3NSw3MC4xMTM1NywzMzUuOTc3MDIsNzAuMjAyNzgsMzM0LjcyMDQ5LDcwLjIwMjc4eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTEyOC44OTMyMywzMi4yNzUzM2MtNS41NDY3MywwLTkuNDE4MjksMS42MTAwMi0xMy4xNTczNiw1LjI4MDAzVjE2LjI3Njg1aC0xMS4yMTgwOXYzOS40MzU0NgoJCWMwLDE0Ljc2MDQsMTAuNjcxNjEsMjQuODY5NjMsMjIuNjYyMzYsMjQuODY5NjNjMTMuMzI5MDYsMCwyNS4wMDc3Ny0xMC4yODg5OSwyNS4wMDc3Ny0yNC4xNTIzMgoJCUMxNTIuMTg3OTEsNDIuNzQxOTEsMTQxLjQxODY5LDMyLjI3NTMzLDEyOC44OTMyMywzMi4yNzUzM3ogTTEyOC44MjM1LDY5LjI5MTczYy03LjAyNzU0LDAtMTIuNzIzNzQtNS42OTY0Mi0xMi43MjM3NC0xMi43MjM1MwoJCWMwLTcuMDI2ODksNS42OTYyLTEyLjcyMzUzLDEyLjcyMzc0LTEyLjcyMzUzYzcuMDI2NjcsMCwxMi43MjMzMSw1LjY5NjY0LDEyLjcyMzMxLDEyLjcyMzUzCgkJQzE0MS41NDY4MSw2My41OTUzLDEzNS44NTAxNyw2OS4yOTE3MywxMjguODIzNSw2OS4yOTE3M3oiLz4KCTxwYXRoIGZpbGw9IiMyMTMzNDMiIGQ9Ik0yNTAuNjgzNDYsNTUuODQ3MjRjMC0xMy44NjMzMy0xMS42Nzg3My0yNC4xNTIzMi0yNS4wMDc3OC0yNC4xNTIzMgoJCWMtMTEuOTkwNzUsMC0yMi42NjIzNSwxMC4xMDkyMi0yMi42NjIzNSwyNC44Njk2M1Y5NmgxMS4yMTgwOVY3NC43MjE0OWMzLjczOTA2LDMuNjcwMDEsNy42MTA2Myw1LjI4MDAzLDEzLjE1NzM1LDUuMjgwMDMKCQlDMjM5LjkxNDIyLDgwLjAwMTUyLDI1MC42ODM0Niw2OS41MzQ5NCwyNTAuNjgzNDYsNTUuODQ3MjR6IE0yNDAuMDQyMzQsNTUuNzA4NjVjMCw3LjAyNjg5LTUuNjk2NjQsMTIuNzIzNTMtMTIuNzIzMzEsMTIuNzIzNTMKCQljLTcuMDI3NTQsMC0xMi43MjM3NC01LjY5NjY0LTEyLjcyMzc0LTEyLjcyMzUzYzAtNy4wMjcxLDUuNjk2Mi0xMi43MjM1MywxMi43MjM3NC0xMi43MjM1MwoJCUMyMzQuMzQ1Nyw0Mi45ODUxMywyNDAuMDQyMzQsNDguNjgxNTUsMjQwLjA0MjM0LDU1LjcwODY1eiIvPgoJPHBhdGggZmlsbD0iI0ZGNUMzNSIgZD0iTTI4Ni45MzI0NiwzMS4xNTE1NFYxOS44ODMxMmMyLjk0MTE2LTEuMzg5NTEsNS4wMDIwMS00LjM2NTA4LDUuMDAyMDEtNy44MTg1di0wLjI2MDM4CgkJYzAtNC43NjU1Ny0zLjg5OTQ0LTguNjY0OC04LjY2NDgzLTguNjY0OGgtMC4yNjAxNmMtNC43NjU3OCwwLTguNjY1MjIsMy44OTkyMy04LjY2NTIyLDguNjY0OHYwLjI2MDM4CgkJYzAsMy40NTM0MSwyLjA2MTI4LDYuNDI5NDIsNS4wMDI0MSw3LjgxODcydjExLjI2ODQyYy00LjM3OTI0LDAuNjc2NTYtOC4zODA2NSwyLjQ4MjY5LTExLjY4MjE5LDUuMTQwNzlsLTMwLjkzODg3LTI0LjA2NzU2CgkJYzAuMjAzNTEtMC43ODM3NywwLjM0NjQ1LTEuNTkxMjksMC4zNDczMi0yLjQzODY4YzAuMDA2OTctNS4zOTc5MS00LjM2MzEzLTkuNzc5MzMtOS43NjEyNS05Ljc4NjMxCgkJYy01LjM5ODEzLTAuMDA2NzUtOS43Nzk1Niw0LjM2MzU2LTkuNzg2NTMsOS43NjE0N2MtMC4wMDY1Myw1LjM5NzkxLDQuMzYzNTYsOS43NzkzMyw5Ljc2MTY5LDkuNzg2MDkKCQljMS43NTkyOCwwLjAwMjE4LDMuMzg3MzktMC40OTc0NSw0LjgxNDYxLTEuMzA5MTFsMzAuNDM0NjUsMjMuNjc1NzljLTIuNTg4NTksMy45MDY4NS00LjEwNDI1LDguNTg2OC00LjEwNDI1LDEzLjYyNDUyCgkJYzAsNS4yNzQ1OCwxLjY2NjAyLDEwLjE1MjgxLDQuNDgyMDksMTQuMTY1NzdsLTkuMjU1NzQsOS4yNTU3NGMtMC43MzE2OS0wLjIxOTQyLTEuNDkxMjctMC4zNzMwNC0yLjI5NDg2LTAuMzczMDQKCQljLTQuNDM1NDcsMC04LjAzMTYsMy41OTU5Mi04LjAzMTYsOC4wMzE2czMuNTk2MTMsOC4wMzE2LDguMDMxNiw4LjAzMTZjNC40MzU5LDAsOC4wMzE1OS0zLjU5NTkyLDguMDMxNTktOC4wMzE2CgkJYzAtMC44MDMxNi0wLjE1MzM4LTEuNTYyOTYtMC4zNzMwMi0yLjI5NDY1bDkuMTU1NDktOS4xNTUyOGM0LjE1NTcsMy4xNzI1NSw5LjMzMDY5LDUuMDc4MDMsMTQuOTYyODMsNS4wNzgwMwoJCWMxMy42NDU0NSwwLDI0LjcwNzUyLTExLjA2MjI5LDI0LjcwNzUyLTI0LjcwODE3QzMwNy44NDc3NSw0My4xODU4NywyOTguNzcyODYsMzIuOTgwMzMsMjg2LjkzMjQ2LDMxLjE1MTU0eiBNMjgzLjE0MDIzLDY4LjIwNjI4CgkJYy02Ljk5NjE1LDAtMTIuNjY4NC01LjY3MTM3LTEyLjY2ODQtMTIuNjY3NTNjMC02Ljk5NTk0LDUuNjcyMjQtMTIuNjY3NTMsMTIuNjY4NC0xMi42Njc1MwoJCWM2Ljk5NTMsMCwxMi42Njc1NCw1LjY3MTU4LDEyLjY2NzU0LDEyLjY2NzUzQzI5NS44MDc3Nyw2Mi41MzQ5MiwyOTAuMTM1NTMsNjguMjA2MjgsMjgzLjE0MDIzLDY4LjIwNjI4eiIvPgo8L2c+Cjwvc3ZnPgo=' />
            </Link>
               
            </Box>
            <Box border="1px solid none" w="120px" h="40px" marginRight="10%" fontWeight="bold" fontSize="14px" >
                <p>+65 3158 3395</p>
            </Box>
            </Flex>
            </Box>
            <Box  as={motion.div}

    
      drag='x'
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition='0.5s linear'
            border="1px solid #3e5974" w="100%" h="60vh" bg="#3e5974" backgroundRepeat="no-repeat" backgroundPosition="center center" backgroundSize="100% auto" backgroundImage="https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/_style-guide/sword-sprocket/circleLight1.svg" >
               <Container mt="5%">
                <Heading fontSize="40px" fontWeight="750" ml="20%" color="white" >Get Started With Marketing Hub®</Heading>
               </Container>
               
                <Text mt="2%" ml="30%" fontSize="20" color="white">Start with free tools and upgrade as you grow, or hit the ground running with one of our </Text>
                <Text ml="45%" fontSize="20" color="white"> premium editions.</Text>
               
            </Box>
            <Box width="100%" border="1px solid none" height="200vh"  >
            <Flex justifyContent="space-evenly">
                <Box border="1px solid none" w="30%" h="105vh" mt="10%" ml="20%" shadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" >
                    <Box border="1px solid #ff8033" w="100%" h="15%" bg="#ff8033">
                        <Heading textAlign="center" mt="5%" color="white" fontSize="30">Free Tools</Heading>
                    </Box>
                    <Box border="1px solid none" w="100%" h="15%">
                        <Text mt="10%" ml="27%" fontSize="20">Start small by converting </Text>
                        <Text ml="26.8%" fontSize="20">website visitors into leads.</Text>
                        
                    </Box>
                    <Divider orientation='horizontal' />
                    <Box width="100%" border="1px solid none" h="70vh" mt="5%">
                      <Text ml="5%" fontSize="20" fontWeight="light">Popular Features:</Text>
                      <Flex mt="2%" ml="5%">
                         <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Email marketing</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                         <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Forms</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                         <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Landing pages</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                         <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Contact management</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                         <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Live chat</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                         <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Facebook, Google, and LinkedIn ads</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                         <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Traffic and conversion analytics</Text>
                      </Flex>
                      <Button mt="10%"  bg="#ff8033" color="white" ml="30%" onClick={free}>Get started free</Button>
                      <Text textAlign="center" mt="10%" >No credit card required. Get started in seconds.</Text>
                    </Box>
                    
                </Box>
                <Box border="1px solid none" w="30%" h="160vh" mt="10%" mr="14%" shadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <Box border="1px solid #ff8033" w="100%" h="10%" bg="#ff8033">
                        <Heading textAlign="center" mt="5%" color="white" fontSize="30" >Premium Editions</Heading>
                    </Box>
                    <Box border="1px solid none" w="100%" h="12%">
                        <Text mt="10%" ml="27%" fontSize="20">Run complete inbound </Text>
                        <Text ml="25%" fontSize="20"> marketing campaigns at scale</Text>
                         <Text ml="26%" fontSize="20">with our all-in-one software.</Text>
                    </Box>
                    <Divider orientation='horizontal' />
                    <Box width="100%" border="1px solid none" h="70vh" mt="5%">
                      <Text ml="5%" fontSize="20" fontWeight="light">Popular Features:</Text>
                      <Text ml="5%" fontSize="20" fontWeight="400">Starter (starting at $45/mo.)</Text>
                      <Flex mt="2%" ml="5%">
                      <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Ad retargeting</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                      <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Marketing automation</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                      <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Landing page reporting</Text>
                      </Flex>
                      <Text ml="5%" fontSize="20" fontWeight="400" mt="4%" >Professional (starting at $800/mo.)</Text>
                      <Flex mt="3%" ml="5%" >
                      <Image w="5%" h="5%" mt="1.7%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Omni-channel marketing automation and custom workflows</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                      <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Blogging</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                      <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Landing page reporting</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                      <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Landing page reporting</Text>
                      </Flex>
                       <Text ml="5%" fontSize="20" fontWeight="400"mt="4%" >Enterprise (starting at $3,600/mo.)</Text>
                       <Flex mt="2%" ml="5%">
                      <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Adaptive testing</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                      <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Multi-touch revenue attribution</Text>
                      </Flex>
                      <Flex mt="2%" ml="5%">
                      <Image w="5%" h="5%"  mt="1.5%" borderRadius="100%" src='https://tse3.mm.bing.net/th?id=OIP.JYLsGIJ06j1egD14aKERTAAAAA&pid=Api&P=0'/>
                            <Text ml="2%" fontWeight="light" fontSize="20">Sandbox account</Text>
                      </Flex>
                      <Button mt="10%"  bg="#ff8033" color="white" ml="40%" onClick={demo}>Get demo</Button>
                      <Text textAlign="center" mt="10%" >Or call us at 866-563-8745 to get your questions</Text>
                       <Text textAlign="center" mt="3%" color="#213343">answered right now.</Text>
                      </Box>
                </Box>
            </Flex>
               <Box border="1px solid none" w="100%" h="20vh" mt="1%">
                 <Text textAlign="center" mt="3%" color="#213343"> For more detailed information on product packaging and the limits that apply, please see our Product and Services Catalog here. Price shown in USD and subject to applicable tax.</Text>
                
                
               </Box>
            </Box>
            {/* footer */}
            <Box w="100%" height="200px" border="1px solid none" bg="#213343" color="white">
           <Container border="1px solid #213343 " height="150px" mt=""  w="100%"  >
            <Heading ml="90px" mt="18" fontSize="18px">Copyright © 2023 HubSpot, Inc.</Heading> 
            <Flex justifyContent="space-between" mt="50px" ml="9">
                <Box border="1px solid none">
                    <Heading fontSize="18px" ml="35" color="#b0c3d5">Legal Stuff</Heading>
                </Box>
                <Box border="1px solid none" mr="25">
                    <Heading fontSize="18px" color="#b0c3d5">Privacy Policy</Heading>
                </Box>
            </Flex>
           </Container>
        </Box>
</>
  )
}

export default Cartlink1
