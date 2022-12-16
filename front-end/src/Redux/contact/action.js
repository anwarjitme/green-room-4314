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


export const postContactSuccess=(payload)=>{
  return {
    type:types.POST_CONTACT_SUCCESS,payload
  }
}

export const postcontact=(email
   ,firstName,lastName,jobTitle,phone,Lifecycle,LeadStatus,contactowner
    )=>(dispatch)=>{
    
    
        const payload=[{
            email:email,
            firstName:firstName,
            lastName:lastName,
            jobTitle:jobTitle,
            phone:phone,
            Lifecycle:Lifecycle,
            LeadStatus:LeadStatus,
            contactowner:contactowner
        }]

      axios.post('http://localhost:8080/Contacts',payload)
      .then((res)=>{
        console.log(res.data)
        dispatch(postContactSuccess(res.data))
      }).catch((err)=>{
        console.log(err)
      })
       

}

export const getContact=()=>(dispatch)=>{
    axios.get('http://localhost:8080/Contacts')
    .then(res=>{
        //console.log('getData',res.data)
        dispatch(getContantSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getContantError(err))
    })
 }






