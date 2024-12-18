import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
   <>
     <Navbar expand="lg" className="position-absolute w-100 bg-slate-200  ">
      <Container>
        <Navbar.Brand href="#home" className=' font-serif font-semibold text-5xl'>Infusyx</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbg'>
          <Nav className="m-auto ">
          <NavLink to="/Home" className="nav-link "  >Home</NavLink>
          <NavLink className="nav-link "  >About us</NavLink>
          <NavLink  className="nav-link  "  >Gallery</NavLink>
          <NavLink  className="nav-link  "  >Contact us</NavLink>
          <NavLink  className="nav-link  "  >Blog</NavLink>
          <NavLink  className="nav-link "  >MBBS In Uzbekistan</NavLink>
          <NavLink  className="nav-link  "  >University Page</NavLink>
          <NavLink  className="nav-link  "  >Terms</NavLink>
          <NavLink  className="nav-link  "  >Disclaimer</NavLink>
          <NavLink className="nav-link  "  >Privacy Policy</NavLink>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default MyNavbar