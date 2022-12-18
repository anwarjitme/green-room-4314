import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
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
  Button
} from "@chakra-ui/react";
import { Search2Icon ,ChevronDownIcon} from "@chakra-ui/icons";
import { getdata } from "../../Redux/Company/action";
import Companyitem from "./Companyitem";




const Companydata = () => {
  const dispatch = useDispatch();
  const company = useSelector((store) => store.companies.company);
    useEffect(()=>{
      if(company.length===0)
      {
        dispatch(getdata())
      }
      
    },[dispatch,company])
    console.log('item',company)
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
                <Th>COMPANY NAME</Th>
                <Th>COMPANY OWNER</Th>
                <Th>CREATE DATE(GMT+5:30)</Th>
                <Th>PHONE NUMBER</Th>
                <Th>LAST ACTIVITY DATE(GMT+5:30)</Th>
                <Th>CITY</Th> 
                <Th>COUNTRY/REGION</Th>
                <Th>INDUSTRY</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {company.map((el) => (
              
              <Companyitem
                // name={el.firstName + " " + el.lastName}
                // email={el.email}
                // phonenumber={el.phonenumber}
                // contactowner={el.contactowner}
                // leadstatus={el.LeadStatus}
                // createdate={el.createdate}
                name={el.Companyname}
                owner={el.Companyowner}
                createdata={el.Timezone}
                phonenumber={el.phonenumber}
                lastdate={el.Timezone}
                city={el.City}
                country={el.StateRegion}
                industry={el.Industry}
                id={el.id}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Companydata;
