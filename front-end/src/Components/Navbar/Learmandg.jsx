import React from 'react'
import Footer from './Footer'
import "./Learnandg.css"

let  Data=[
  {
 image:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_agency.svg",
 text1:"150",
text2:"HubSpot user groups"
  },
  {
 image:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_blog.svg",
 text1:"7M",
text2:"monthly visits"
  },
  {
 image:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_academy.svg",
 text1:"463K",
text2:"certified professionals"
  },
  {
 image:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_inbound.svg",
 text1:"70K",
text2:"registered attendees"
  },
  {
 image:"https://cdn2.hubspot.net/hubfs/53/HubSpot-App-Marketplace-White.png",
 text1:"1,250",
text2:"integrations"
  },
  {
 image:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_globe.svg",
 text1:"6",
text2:"languages"
  },
  {
 image:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_followers.svg",
 text1:"3.1M",
text2:"social followers"
  },
  {
 image:"https://cdn2.hubspot.net/hubfs/53/Lists.svg",
 text1:"158,000",
text2:"customers"
  }
  ]


  let imageArr=[
    {
      image1:"https://f.hubspotusercontent00.net/hubfs/53/1200px-WWF_logo_svg%20(1).png",
      image2:"https://f.hubspotusercontent00.net/hubfs/53/soundcloud.png"
    },
    {
      image1:"https://f.hubspotusercontent00.net/hubfs/53/trello-logo-blue%20(1).png",
      image2:"https://www.hubspot.com/hubfs/Momentive%20Logo%20for%20HS%20website.png"
    },
    {
      image1:"https://www.hubspot.com/hubfs/Reddit%20Logo%20for%20HS%20website%20(1).png",
      image2:"https://www.hubspot.com/hubfs/DoorDash%20Logo%20for%20HS%20Website-1.png"
    },
    {
      image1:"https://www.hubspot.com/hubfs/WW%20Logo%20for%20HS%20Website%20(2).png",
      image2:"https://www.hubspot.com/hubfs/Eventbrite%20Logo%20for%20HS%20Website-1.png"
    },




  ]



export default function Learmandg() {

  return (

    <div>



        <div className='Learngrowcss'> 

         <h1 id='learnh1'>Learn and grow with award- 
              winning support and a thriving community 
              behind you.
            </h1>

          <p id='learnpara1'>
            You don't have to go it alone. Master the inbound methodology and get the most out of your tools 
               with 
              HubSpot's legendary customer support team and a community of thousands of marketing and sales 
                  pros just like you.
          </p>  
           
         
           <div className='learnboxcssout'>

           {
            Data.map((ele)=>(

              <div className='learnboxcss'>
               <img src={ele.image} alt="image" 
                />
                <h1 id='tex1h1'>{ele.text1}</h1>
              <h1 id='tex1h2'> {ele.text2}</h1>
               </div>

            ))
           }

             
           </div>
          
            
        </div>


     

        <div className='lastdiv'>

        <div className='lasdh1'>
        <h1>158,000+</h1>

        <p>customers in over 120 countries growing 
          their businesses with HubSpot</p>

        </div>


        
        <div className='twologo'>
            
            {
              imageArr.map((ele)=>(
                <div className='twologodiv'>
                <img src={ele.image1} alt ="logo1" width="110px"/>
                <img src={ele.image2} alt ="logo3" width="110px"/>
              
               </div>
              ))
            }
      
          
        </div>



        </div>



     <div className="leastpartdiv">
       <div className='leastparth1'>
       <h1 id='headinglast1'>Start Growing With HubSpot Today</h1>
       <p id='lastdivp1'>With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</p>
       <div className='lastsecbtn'>
        <button id="lbtn1">Get a demo</button>
        <button id='lbtn2'>Get started free</button>
       </div>
       <p id='lastparp2'>Get started with free tools, or get more with our premium software.</p>

       </div>


       <div>
        <img src="https://www.hubspot.com/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_6.png"
        width="300px" />
       </div>
     </div>



      <Footer/>



      
    </div>
  )
}
