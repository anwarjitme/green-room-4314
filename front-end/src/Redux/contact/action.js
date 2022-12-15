import * as types from './actionTypes'
import axios from 'axios'
export const getContantRequest=()=>{
    return {
    type:types.GET_CONTACT_REQUEST
    }
}
export const getContantError=()=>{
    return {
    type:types.GET_CONTACT_ERROR
    }
}
export const getContantSuccess=(payload)=>{
    return {
    type:types.GET_CONTACT_SUCCESS,payload
    }
}

 const getContact=(dispatch)=>{
    axios.get('http://localhost:8080/Contacts')
    .then(res=>{
        console.log('getData',res)
        dispatch(getContantSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getContantError(err))
    })
 }


export {
   getContact
}