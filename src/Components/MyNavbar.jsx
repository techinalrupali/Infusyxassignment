import React, { useState } from 'react'
import { Link ,NavLink} from 'react-router-dom'
import Image from "react-bootstrap/Image";


const MyNavbar = () => {
  const[menuOpen,SetMenuopen]=useState(false)

  return (
   <>
    <nav>
      <Link to="/" className='webname'> <Image
              src="https://www.eklavyaoverseas.com/images/logo-white.png"
              rounded
            /></Link>
      <div className='menu' onClick={()=>{
        SetMenuopen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen?"open":""}>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        
        <li>
        <NavLink to="#about">ABOUT US</NavLink>
        </li>
        <li>
        <NavLink to="#contact">CONTACT US</NavLink>
        </li>
        <li>
        <NavLink to="#place">GALLARY</NavLink>
        </li>
        <li>
        <NavLink to="#blog">BLOG</NavLink>
        </li>
        <li>
        <NavLink to="#uzbek">MBBS IN UZBEKISTAN</NavLink>
        </li>
        <li>
        <NavLink to="#univer">UNVERSITY PAGE</NavLink>
        </li>
        <li>
        <NavLink to="#terms">TERMS</NavLink>
        </li>
        <li>
        <NavLink to="#discla">DISCLAIMER</NavLink>
        </li>
        <li>
        <NavLink to="#privacy">PRIVACY POLICY</NavLink>
        </li>
        
        
        
      </ul>
    </nav>
    {/* home
2. about us
3. gallery
4. contact us
5. blog
6. mbbs in Uzbekistan
7. university page
8. terms
9. disclaimer
10. privacy policy */}


  
   </>
  )
}

export default MyNavbar