import * as types from "./actionTypes"
import axios from "axios";
function postrequest()
{
    return {
        type:types.POST_COMPANY_REQUEST,
    }
}
function postsucess(payload)
{
    return {
        type:types.POST_COMPANY_SUCESS,
        payload
    }
}
function postfailure(payload)
{
    return {
        type:types.POST_COMPANY_FAILURE,
        payload
    }
}
function postdata(kaji)
{
    return function (dispatch){
        dispatch(postrequest())
        return axios
        .post("http://localhost:8080/company",kaji)
        .then((res)=>dispatch(postsucess(res.data)))
        .catch((err)=>dispatch(postfailure(err)))
    }

}
function getrequest()
{
    return {
        type:types.GET_COMPANY_REQUEST,
    }
}
function getsucess(payload)
{
  //  console.log(payload)
    return {
        type:types.GET_COMPANY_SUCESS,
        payload
    }
}
function getfailure(payload)
{
    return {
        type:types.GET_COMPANY_FAILURE,
        payload
    }
}
// function getdata()
// {
//     return function (dispatch){
//         dispatch(getrequest())
//         return axios
//         .get("http://localhost:8080/company")
//         .then((res)=>dispatch(getsucess(res.data)))
//         .catch((err)=>dispatch(getfailure(err)))
//     }

// }
const getdata=()=>(dispatch)=>{
    dispatch(getrequest())
    axios.get('http://localhost:8080/company')
    .then(res=>{
        //console.log('getData',res.data)
        dispatch(getsucess(res.data))
    })
    .catch(err=>{
        dispatch(getfailure(err))
    })
}

export {postdata,getdata}