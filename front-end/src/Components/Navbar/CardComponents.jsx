import React from 'react'
import "./card.css"
import {AiFillCheckCircle} from "react-icons/ai";
import { Checkbox, Stack } from '@chakra-ui/react'
import Learmandg from './Learmandg';
import { useNavigate } from 'react-router-dom';

let arr=[
    {logo:"https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg",p1:"Marketing Hub",p2:"Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.",
check1:" Lead generation",check2:"Marketing automation",check3:" Analytics",btn:"Get start"},

{logo:"https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg",p1:"Sales Hub ",p2:"Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.",
check1:" Advanced CRM",check2:" Meeting scheduling",check3:" Payments",btn:"Get start"},


{logo:"https://www.hubspot.com/hubfs/product_icons_2022/ServiceHub_Icon_Gradient_RGB_24px.svg",p1:"Service  Hub",p2:"Customer service software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.",
check1:" Tickets",check2:"Customer feedback",check3:"  Knowledge base",btn:"Get start"},

{logo:"https://www.hubspot.com/hubfs/product_icons_2022/CMSHub_Icon_Gradient_RGB_24px.svg",p1:"CMS  Hub",p2:"Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.",
check1:" Drag-and-drop editor",check2:"SEO recommendations",check3:" Website themes",btn:"Get start"},



{logo:"https://www.hubspot.com/hubfs/product_icons_2022/OperationsHub_Icon_Gradient_RGB_24px.svg",p1:"Operations  Hub",p2:"Operations software that syncs your apps, cleans and curates customer data, and automates processes so all your systems and teams work better together.",
check1:"  Data sync",check2:"Programmable automation",check3:" Data quality automation",btn:"Get start"},


]


export default function CardComponents() {
const navigator=useNavigate();
const card=()=>
{
  navigator("/cartlink1")
}
  return (
<>
    <div className='maincard'>
       
        

         {
            arr.map((elem)=>(

                <div className='card1'>

<div className='imgdiv'><img 
  src={elem.logo} 
   alt="" width="30px"/>

<h1 id='cadrh1'>{elem.p1}</h1>
</div>
<p id='cardp1'>{elem.p2}</p>
<hr/>
<div className='card2'>
<h2>Popular Features</h2>

 <div className='card-h'>

 <Stack spacing={1} direction='column'>
<Checkbox colorScheme='orange' 
defaultChecked>
{elem.check1}
</Checkbox>
<Checkbox colorScheme='orange' 
defaultChecked>
{elem.check2}
</Checkbox>
<Checkbox colorScheme='orange' defaultChecked>
{elem.check3}
</Checkbox>
</Stack>
 




  {/* <div style={{display:"flex",alignContent:"center"}}>

     <AiFillCheckCircle/> 
     <h2>Lead generation</h2>
  </div>
 

  <h2><AiFillCheckCircle/>Marketing automation</h2>

  <h2><AiFillCheckCircle/>Analytics</h2> */}
 
 </div>
</div>
<button id='cardbtn' onClick={card}>Get started</button>

</div>

            ))
         }

      
    </div>


    <Learmandg/>
</>
  )
}
