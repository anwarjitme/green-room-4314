import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getContact} from '../../Redux/contact/action'
import {Box} from '@chakra-ui/react'

const ContactItem=()=>{

    const dispatch=useDispatch()

    const contacts=useSelector((store)=>store.contact.contacts)
    
      
    useEffect(()=>{
      dispatch(getContact())
    },[])
    console.log('item',contacts)
//console.log('cc',contact)
    return (
        <Box>
cccccc
        </Box>
    )
}

export {ContactItem}

