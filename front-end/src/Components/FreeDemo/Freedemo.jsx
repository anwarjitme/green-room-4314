import React from 'react'
import { Box, Container, Flex,Image,Grid,GridItem, Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Freedemo = () => {
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
                <p>+91 11 7127 9211</p>
            </Box>
           </Flex>
    </Box>
    <Box border="1px solid none" w="100%" h="135vh" bg="#2e475d"  >
        <Flex justifyContent="space-evenly">
            <Box border="1px solid none" w="40%" h="100vh" mt="100px" marginLeft="100px" >
                <Container fontSize="40px" fontWeight="700" color="white" >
                    <h1>Get a Free Demo of HubSpot's  CRM Platform</h1>
                </Container>
                <Container fontSize="20px" fontWeight="400" mt="30px" color="white">
                HubSpot’s CRM platform has all the tools you need for marketing, sales, content management, operations, and customer service. Each product in the platform is powerful alone, but the real magic happens when you use them together.
                </Container>
                <Container fontSize="30px" fontWeight="700" mt="20px" color="white">
                Popular features
                </Container>
                <Grid templateColumns='repeat(2, 1fr)' gap={1} color="white">
  <GridItem w='90%' h='200' fontSize="18px" fontWeight="500" mt="5" ml="10" color="white" >
    <p >Marketing</p>
    <Flex fontSize="18px" fontWeight="500" alignItems="center" mt="5px">
        <Image src='https://tse3.mm.bing.net/th?id=OIP.Gq5sG7nGGprsBKNp4mURsgHaHa&pid=Api&P=0' w="20px" h="20px" mr="10px"/>
        <p >Lead generation</p>
    </Flex>
    <Flex fontSize="18px" fontWeight="500" alignItems="center" mt="5px">
        <Image src='https://tse3.mm.bing.net/th?id=OIP.Gq5sG7nGGprsBKNp4mURsgHaHa&pid=Api&P=0' w="20px" h="20px" mr="10px"/>
        <p >Marketing automation</p>
    </Flex>
    <Flex fontSize="18px" fontWeight="500" alignItems="center" mt="7px">
        <Image src='https://tse3.mm.bing.net/th?id=OIP.Gq5sG7nGGprsBKNp4mURsgHaHa&pid=Api&P=0' w="20px" h="20px" mr="10px"/>
        <p >Multi-touch revenue <br></br> attribution</p>
    </Flex>
  </GridItem>
  <GridItem w='90%' h='200' fontSize="18px" fontWeight="500" mt="5" ml="10" >
  <p >Sales</p>
    <Flex fontSize="18px" fontWeight="500" alignItems="center" mt="5px">
        <Image src='https://tse3.mm.bing.net/th?id=OIP.Gq5sG7nGGprsBKNp4mURsgHaHa&pid=Api&P=0' w="20px" h="20px" mr="10px"/>
        <p >Advanced CRM</p>
    </Flex>
    <Flex fontSize="18px" fontWeight="500" alignItems="center" mt="5px">
        <Image src='https://tse3.mm.bing.net/th?id=OIP.Gq5sG7nGGprsBKNp4mURsgHaHa&pid=Api&P=0' w="20px" h="20px" mr="10px"/>
        <p >Sales automation</p>
    </Flex>
    <Flex fontSize="18px" fontWeight="500" alignItems="center" mt="7px">
        <Image src='https://tse3.mm.bing.net/th?id=OIP.Gq5sG7nGGprsBKNp4mURsgHaHa&pid=Api&P=0' w="20px" h="20px" mr="10px"/>
        <p >Sales engagement tools</p>
    </Flex></GridItem>
  <GridItem w='90%' h='200' fontSize="18px" fontWeight="500" mt="5" ml="10" >
  <p >Customer Service</p>
    <Flex fontSize="18px" fontWeight="500" alignItems="center" mt="5px">
        <Image src='https://tse3.mm.bing.net/th?id=OIP.Gq5sG7nGGprsBKNp4mURsgHaHa&pid=Api&P=0' w="20px" h="20px" mr="10px"/>
        <p >Knowledge base</p>
    </Flex>
    <Flex fontSize="18px" fontWeight="500" alignItems="center" mt="5px">
        <Image src='https://tse3.mm.bing.net/th?id=OIP.Gq5sG7nGGprsBKNp4mURsgHaHa&pid=Api&P=0' w="20px" h="20px" mr="10px"/>
        <p >Help desk automation</p>
    </Flex>
    <Flex fontSize="18px" fontWeight="500" alignItems="center" mt="7px">
        <Image src='https://tse3.mm.bing.net/th?id=OIP.Gq5sG7nGGprsBKNp4mURsgHaHa&pid=Api&P=0' w="20px" h="20px" mr="10px"/>
        <p >Customer feedback surveys</p>
    </Flex>
  </GridItem>
  
</Grid>
            </Box>
            <Box border="1px solid green" w="40%" h="100vh" mt="100px" marginRight="100px" bg="white">hii</Box>
        </Flex>
        <Box border="1px solid none" w="100%" h="190px" mt="20">
      <Box width="83%" mt="10" ml="130" >
        <Heading fontSize="18.7" color="white">Find out why 158,000+ customers from more than 120 countries trust HubSpot to bring their team, tools, and data together in one place.</Heading>
      </Box>
        </Box>
    </Box>
    {/* image */}
    <Box border="1px solid none" w="100%" h="500px" bg="#516f90">
    <Flex justifyContent="space-evenly">
        <Box border="1px solid none" w="35%" h="480" mt="4" >
            <Container >
                <Heading fontSize="29px" mt="10" color="white">Don’t Just Take Our Word for It


</Heading>
            </Container>
            <Container mt="19.9" fontSize="20px" color="white">
                <p>See for yourself how HubSpot’s CRM platform can meet your business’s unique challenges, needs, and product interests. Complete the form above to get your free demo.</p>
            </Container>
        </Box>
        <Box border="1px solid none" w="60%" h="480" mt="4">
            <Image  src='https://offers.hubspot.com/hubfs/ProductUI+Blobs-CRMHub@2x.png' h="480" w="600"
            />
        </Box>
    </Flex>

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

export default Freedemo

