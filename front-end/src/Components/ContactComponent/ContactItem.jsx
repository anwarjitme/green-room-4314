import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getContact} from '../../Redux/contact/action'
import {
  Box,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Input,
  InputLeftAddon,
  InputGroup,
  Button
} from "@chakra-ui/react";
import { ContactList } from "./ContactList";
import { Search2Icon,ChevronDownIcon } from "@chakra-ui/icons";
import { Pagination } from "./Pagination";




const ContactItem = () => {
  const [page,setPage]=useState(1)
  const dispatch = useDispatch();
  const contacts = useSelector((store) => store.contact.contacts);
    useEffect(()=>{
      dispatch(getContact(page))
      console.log(page,'useEffect')
    },[page])
    console.log('item',contacts)

 const handleNext=()=>{
     setPage((prev)=>prev+1)
 }


 const handlePrev=()=>{
  setPage((prev)=>prev-1)
 }

  return (
    <Box m="auto" w="90%">
           <Box display='flex' gap='2'>
            <Button bg='white' color='#0091ae'>Contact owner <ChevronDownIcon/></Button>
            <Button bg='white' color='#0091ae'>Create date <ChevronDownIcon/></Button>
            <Button bg='white' color='#0091ae'>Last activity date <ChevronDownIcon/></Button>
            <Button bg='white' color='#0091ae'>Lead status <ChevronDownIcon/></Button>
            <Button bg='white' color='#0091ae'>All filters <ChevronDownIcon/></Button>
            <Button bg='white' color='#0091ae'>Clear filter </Button>
           </Box>




      <Box mt='5px' bg="#C4F1F9">
        <InputGroup>
          <InputLeftAddon children={<Search2Icon />} />
          <Input
            w="250px"
            type="text"
            placeholder="Search name,phone number ,email"
          />
        </InputGroup>
      </Box>

      <TableContainer mt="20px">
        <Table variant="simple">
          <Thead bg="#C4F1F9">
            <Tr>
              <Th></Th>
              <Th>NAME</Th>
              <Th>EMAIL</Th>
              <Th>PHONE NUMBER</Th>
              <Th>CONTACT OWNER</Th>
              <Th>LEAD STATUS</Th>
              <Th>CREATE DATE (GMT+5:30)</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {contacts.map((el) => (
              <ContactList
                name={el.firstName + " " + el.lastName}
                email={el.email}
                phonenumber={el.phonenumber}
                contactowner={el.contactowner}
                leadstatus={el.LeadStatus}
                createdate={el.createdate}
                id={el._id}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box  w='200px' m='auto'>
        <Pagination 
        handleNext={handleNext}
        handlePrev={handlePrev}
        page={page}/>
      </Box>
    </Box>
  );
};

export { ContactItem };
