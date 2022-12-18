import {useNavigate} from "react-router-dom"
import {Box,Tr,Td,Input, Heading,Checkbox,Image,Button,Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverFooter,PopoverBody,PopoverArrow,PopoverCloseButton,ButtonGroup} from '@chakra-ui/react'
import {DeleteIcon} from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { DeleteContact } from '../../Redux/contact/action'
const ContactList=({id,name,email,phonenumber,contactowner,leadstatus,createdate})=>{
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleDelete=()=>{
    dispatch(DeleteContact(id))
  }
    return (
      <>
        <Tr>
          <Td>
            <Checkbox size="lg"></Checkbox>
          </Td>
          <Link to={`/contact/${id}`}>
            <Td border="1px solid grey">
              <Heading
                onClick={() => navigate(`/contact/${id}`)}
                as="h2"
                size="sm"
              >
                {name}
              </Heading>
            </Td>
          </Link>
          <Td border="1px solid grey">
            <Heading as="h2" size="sm">
              {email}
            </Heading>
          </Td>
          <Td border="1px solid grey">{phonenumber}</Td>
          <Td border="1px solid grey">
            {contactowner === "" ? "Unassigned" : contactowner}
          </Td>
          <Td border="1px solid grey">
            {leadstatus === "" ? "---" : leadstatus}
          </Td>
          <Td border="1px solid grey">{createdate}</Td>
          <Td border="1px solid grey" _hover={{ color: "red" }}>
         <Button bg='white' mr={5} >
      <DeleteIcon onClick={handleDelete} />
      </Button>
          </Td>
        </Tr>
      </>
    );
}
export {ContactList}

