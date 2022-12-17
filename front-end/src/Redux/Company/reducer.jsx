import * as types from './actionTypes'

const initialState={
    company:[],
    isLoading:false,
    isError:""
}

const companyreducer=(state=initialState,action)=>{
    const {type,payload}=action
   
    switch(type){
        case  types.GET_COMPANY_REQUEST:{
            return {
               ...state,isLoading:false,
            }
        }
        case types.GET_COMPANY_SUCESS:{
            return {
                ...state,isLoading:false,company:payload,
            }
        }
        
        case types.GET_COMPANY_FAILURE:{
            return {
                ...state,isLoading:false,isError:payload
            
        }
    }
        default :
            return state
    }
}



export {companyreducer}