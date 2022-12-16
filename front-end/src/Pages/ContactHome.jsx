import {Box} from '@chakra-ui/react'
import { ContactPage } from '../Components/ContactComponent/ContactPage'
import { Navbar } from '../Components/ContactComponent/Navbar'

const ContactHome=()=>{


    return (
        <Box>
             <Navbar/>
             <ContactPage/>
        </Box>
    )


}
export {ContactHome}