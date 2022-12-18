import {Box,Tr,Td,Input, Heading,Checkbox, Link} from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
const ContactList=({name,email,phonenumber,contactowner,leadstatus,createdate,id})=>{
  const navigate=useNavigate()
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
            Delete
          </Td>
        </Tr>
      </>
    );
}
export {ContactList}

