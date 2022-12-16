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
        type:types.POST_COMPANY_REQUEST,
    }
}
function getsucess(payload)
{
    return {
        type:types.POST_COMPANY_SUCESS,
    }
}
function getfailure(payload)
{
    return {
        type:types.POST_COMPANY_FAILURE,
        payload
    }
}
function getdata(kaji)
{
    return function (dispatch){
        dispatch(getrequest())
        return axios
        .get("http://localhost:8080/company",kaji)
        .then((res)=>dispatch(getsucess(res.data)))
        .catch((err)=>dispatch(getfailure(err)))
    }

}
export {postdata,getdata}