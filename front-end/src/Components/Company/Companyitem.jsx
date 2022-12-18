import {Box,Tr,Td,Input, Heading,Checkbox} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { getdata,deletcompany } from '../../Redux/Company/action'
import {DeleteIcon} from '@chakra-ui/icons'
const Companyitem=({name,owner,createdata,phonenumber,lastdate,city,country,industry,id})=>{
  const dispatch=useDispatch();
  const deletkardo=(id)=>
  {
 //console.log(id)
 dispatch(deletcompany(id)).then(()=>dispatch(getdata()))
  }
    return (
        <>
     
        <Tr>
           <Td> 
            <Checkbox size='lg' >
    
  </Checkbox>
  </Td> 
        <Td border='1px solid grey'><Heading as='h2' size='sm'>{name}</Heading></Td>
        <Td border='1px solid grey'><Heading as='h2' size='sm'>{owner}</Heading></Td>
        <Td border='1px solid grey'>{createdata}</Td>
        <Td border='1px solid grey'>{phonenumber}</Td>
        <Td border='1px solid grey'>{lastdate}</Td>
        <Td border='1px solid grey'>{city}</Td>
        <Td border='1px solid grey'>{country}</Td>
        <Td border='1px solid grey'>{industry}</Td>
       
        <Td border='1px solid grey' _hover={{color:'red'}} onClick={()=>deletkardo(id)}><DeleteIcon/></Td>
      </Tr>
        </>
    )
}
export default Companyitem;

