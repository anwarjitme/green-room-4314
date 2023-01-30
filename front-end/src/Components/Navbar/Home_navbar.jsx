import React from 'react'

import {Link, useNavigate} from "react-router-dom"
import CardComponents from './CardComponents'
import Frontpage from './Frontpage'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,

} from '@chakra-ui/react'
import "./navbar.css"

const Home_navbar = () => {
 const navigator=useNavigate();
 const freedemo=()=>
 {
  navigator("/freedemo")
 }
 const startfree=()=>
 {
  navigator("/login")
 }
  return (
<div style={{display:"flex",flexDirection:"column"}}>

    <div className='Hnavbarcss'>


    <div className='Hup'>
         <div >
    <ul className='H-left'>
        <Link>High Contrast</Link>
        <Link>Contact Sales</Link>

    </ul>

    </div>



    <div >
    <ul className='H-right'>
         <Link to='/login'>Log in</Link>
          <Link>Customer Support</Link>
      
       
       
         

           <Menu>
  <MenuButton as={Link} >
  <Link>About</Link>
  </MenuButton>
  <MenuList>
    <MenuItem>About Us </MenuItem>
    <MenuItem>Contact Us</MenuItem>
    <MenuItem>Carrers</MenuItem>
    <MenuItem>Investor Relations</MenuItem>
    <MenuItem>Management Teams</MenuItem>
  </MenuList>
</Menu>
         
     
        
         

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


          <Menu closeOnSelect={false}>
  <MenuButton as={Link} colorScheme='blue'>
  <Link>Software</Link>
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc'>
    <Link to="/cartlink1"> <MenuItemOption value='asc'>The HubSpot CRM Platform</MenuItemOption></Link>
      <Link to="/cartlink1">
      <MenuItemOption value='desc'>Marketing Hub</MenuItemOption>
      </Link>
      
   <Link to="/cartlink1">
   <MenuItemOption value='email'>sales Hub</MenuItemOption>
   </Link>
      
      <MenuItemOption value='phone'>Operation Hub</MenuItemOption>
      <MenuItemOption value='country'>CMS Hub</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
            </Menu>

            <Link>Pricing</Link>

            <Menu closeOnSelect={false}>
  <MenuButton as={Link} colorScheme='blue'>
  <Link>Resources</Link>
  </MenuButton>
  <MenuList minWidth='250px'>
    <MenuOptionGroup defaultValue='asc'>
      <MenuItemOption value='asc'>Education</MenuItemOption>
      <MenuItemOption value='desc'>Services</MenuItemOption>
   
      <MenuItemOption value='email'>user Resources</MenuItemOption>
      <MenuItemOption value='phone'>Why HubSpot ?</MenuItemOption>
      <MenuItemOption value='country'>HubSpot Ecosystem</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
            </Menu>
           
         
           
          </ul>
      </div>

     </div>
      <div className='button-down'>
        <button id='first-btn' onClick={freedemo}>Get a demo</button>
        <button onClick={startfree}>Get started free </button>
      </div>

    </div>

   
       

       
   

    
    </div>
   
    <Frontpage/>
    <CardComponents/>
    </div>
  )
}

export default Home_navbar