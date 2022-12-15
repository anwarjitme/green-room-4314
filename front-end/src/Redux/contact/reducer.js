import * as types from './actionTypes'

const initialState={
    contacts:[],
    isLoading:false,
    isError:false
}

const reducer=(state=initialState,action)=>{
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
            return {
                ...state,isLoading:true,isError:false,contacts:payload
            }
        }
    }
}



export {reducer}