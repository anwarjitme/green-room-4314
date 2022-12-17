import React from 'react'
import "./footer.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaMedium, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";


export default function Footer() {


  return (
   <>
    <div className='frontFootercss'>

                    <div className='footerleft'>
                   
                        <div className='foolerleft1'>
                        <h1 id='footerh1'>Popular Features</h1>
                       
                        <div>
                        <p>All Products and Features</p>
                        
                        <p>Free Meeting Scheduler App</p>
                        <p>Social Media Tools</p>
                        <p>Email Tracking Software</p>
                        <p>Sales Email Automation</p>
                        <p>Ads Software</p>
                        <p>Email Marketing Software</p>
                        <p>Lead Management Software</p>
                        <p>Pipeline Management Tools</p>
                        </div>
                    
                     </div>



                                <div className='foolerleft2'>
                                    <p>Free Website Builder</p>
                                    <p>Sales Email Templates</p>
                                    <p>Help Desk Software</p>
                                    <p>Free Online Form Builder</p>
                                    <p>Free Chatbot Builder</p>
                                    <p>Free Live Chat Software</p>
                                    <p>Marketing Analytics</p>
                                    <p>Free Landing Page Builder</p>
                                    <p>Free Web Hosting</p>
                                                
                                
                                </div>

            </div>



       




           <div className='footerright'>

              <div className='footerright1'>
                         <h1>Free Tools</h1>
                         <p>Website Grader</p>
                         <p>Make My Persona</p>
                         <p>Email Signature Generator</p>
                         <p>Blog Ideas Generator</p>
                         <p>Invoice Template Generator</p>
                         <p>Marketing Plan Generator</p>
                         <p>Free Business Templates</p>
                         <p>Industry Benchmark Data</p>
                         <p>Software Comparisons</p>
                         <p>Library</p>
                         <p>Website Themes & Templates</p>
        
                   </div>


                         <div className='footerright2'>
                                <h1>Company</h1>
                                <p>About Us</p>
                                <p>Careers</p>
                                <p>Management Team</p>
                                <p>Board of Directors</p>
                                <p>Investor Relations</p>
                                <p>Blog</p>
                                <p>Contact Us</p>
                             
                                
        
                              </div>
            

                               <div className='footerright3'>
                                        <h1>Customers</h1>
                                            <p>Customer Support</p>
                                            <p>Join a Local User Group</p>
                                            <h1>Partners</h1>
                                            <p>All Partner Programs</p>
                                            <p>Solutions Partner Program</p>
                                            <p>App Partner Program</p>
                                            <p>HubSpot for Startups</p>
                                            <p>Affiliate Program</p>
                                            
                                   </div>


        
           </div>




  
       



      
    </div>

     
   <div className='fotter-icos'>
      <div className='footerh1tag'>
        <h1><FaFacebook/></h1>
        <h1><FaInstagram/></h1>
        <h1><FaTwitter/></h1>
        <h1><FaYoutube/></h1>
        <h1><FaLinkedin/></h1>
        <h1><FaMedium/></h1>
        <h1><FaTiktok/></h1>
      </div>


      <div className='footerimg'>
    <img src='https://www.hubspot.com/hubfs/WBZ-1165%20Global%20Nav%20Redesign/Wordmark-White.svg' width="100px"/>

    <h2>Copyright © 2022 HubSpot, Inc.</h2>
    <div className='footerlast'>
        <h1>Legal Stuff |</h1>
        <h1>Privacy Policy |</h1>
        <h1>Security</h1>
    </div>
   </div>
   </div>

   

</>

  )
}
