import React from 'react';
import CardComponents from './CardComponents';
  
import "./frontpage.css"


export default function Frontpage() {


  return (

    <div >

    <div className='mainpage'>
        
        <div className='firstdiv'>
        <p>HUBSPOT CRM PLATFORM</p>
        <h1 id='heading1'>Powerful,</h1> 
           <h1 id='heading2' > not overpowering</h1>

        <p id='para1'>Finally, a CRM platform that’s both powerful and easy to use. Create delightful customer experiences. Have a delightful time doing it.</p>
        <div className='fbtn'>
        <button id='btn1'>Get a demo</button>
        <button id='btn2'>Get started free</button>

        </div>
        <p id='para2'>Get started with free tools, 
           or get 
          more with our premium software.</p>

        </div>


            <div id='image1'>

            <img src='https://www.hubspot.com/hubfs/SUI-Homepage-Header-Desktop@2x.png' alt="image1"  
                height="600px"/>
            
            </div>
           
       
      
    </div>

    

    <div className='section2'>

      <h1 id='sec-hed-1'>The CRM Platform Your 
         Whole Business Will Love</h1>

      <p id='sec-para-1'> HubSpot’s CRM platform 
          has all the tools and integrations you 
           need for marketing, 
           sales, content 
           management, and customer service. Each 
            product in the platform is powerful 
             alone, but the real magic 
            happens when you use them together. 
              </p>

            <div className='secbtn'>
              <button id='sbtn1'>Get free CRM</button>
              <button id='sbtn2'>Demo premium CRA</button>
            </div>

          
           
    </div>
   

   
   
   </div>

  )
}
