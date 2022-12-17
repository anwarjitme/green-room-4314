import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../../Redux/Company/action';

const Companydata = () => {
  const company=useSelector(store=>store.companies.company)
  const dispatch=useDispatch();
  useEffect(()=>
  {
    if(company.length===0)
    {
      dispatch(getdata())
    }
 
  },[dispatch,company])
  ///console.log(company)
  return (
    <div>
      
    </div>
  )
}

export default Companydata
