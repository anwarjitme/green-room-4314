import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getContact} from '../../Redux/contact/action'
import {
  Box,
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Input,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { ContactList } from "./ContactList";
import { Search2Icon } from "@chakra-ui/icons";




const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((store) => store.contact.contacts);
    useEffect(()=>{
      dispatch(getContact())
    },[])
    console.log('item',contacts)
  return (
    <Box m="auto" w="90%">
      <Box bg="#C4F1F9">
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
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export { ContactItem };
