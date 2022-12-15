import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getContact } from "../../Redux/contact/action"
import {Box} from '@chakra-ui/react'
const ContactItem=()=>{

    const dispatch=useDispatch()

    const contact=useSelector(store=>store.contacts)

    useEffect(()=>{
      dispatch(getContact)
    },[])

console.log('cc',contact)
    return (
        <Box>
cccccc
        </Box>
    )
}

export default ContactItem