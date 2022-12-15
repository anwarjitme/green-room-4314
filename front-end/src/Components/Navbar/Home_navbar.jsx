import React from 'react'

import {Link} from "react-router-dom"
import CardComponents from './CardComponents'
import Frontpage from './Frontpage'

import "./navbar.css"

const Home_navbar = () => {

  return (
<div style={{display:"flex",flexDirection:"column"}}>

    <div className='navbarcss'>


    <div className='up'>
         <div >
    <ul className='left'>
        <Link>High Contrast</Link>
        <Link>Contact Sales</Link>

    </ul>

    </div>



    <div >
    <ul className='right'>
         <Link>Log in</Link>
          <Link>Customer Support</Link>
         <Link>About</Link>
        
         

    </ul>

    </div>

    </div>


    <div className='down'>

     <div className='logo-link'>
       <div className='logo-ewb'>
          <img src="./hlogo.png"  alt='logo' width="100px"/>
        
      </div>


      <div >
          <ul className='links-down'>
            <Link>Software</Link>
            <Link>Pricing</Link>
            <Link>Resources</Link>
          </ul>
      </div>

     </div>
      <div className='button-down'>
        <button id='first-btn'>Get a demo</button>
        <button>Get started free </button>
      </div>

    </div>

   
       

       
   

    
    </div>
   
    <Frontpage/>
    <CardComponents/>
    </div>
  )
}

export default Home_navbar