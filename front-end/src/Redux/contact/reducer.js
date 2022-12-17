import * as types from './actionTypes'

const initialState={
    contacts:[],
    isLoading:false,
    isError:false
}

const Contactreducer=(state=initialState,action)=>{
    const {type,payload}=action
   
    switch(type){
        case  types.GET_CONTACT_ERROR:{
            return {
               ...state,isLoading:false,isError:true
            }
        }
        case types.GET_CONTACT_REQUEST:{
            return {
                ...state,isLoading:true,isError:false
            }
        }
        case types.GET_CONTACT_SUCCESS:{
            console.log('payload',payload)
            return {
                ...state,isLoading:true,isError:false,contacts:payload
            }
        }

        case types.POST_CONTACT_SUCCESS:{
            const newContact=[...state.contacts,payload]
            return {
                 ...state,contacts:newContact
            }
        }

        default :
            return state
    }
}



export {Contactreducer}