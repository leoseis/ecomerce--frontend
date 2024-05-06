import React from 'react'
import {Navbar, Nav,Container,Rows} from 'react-bootstrap'


function Header() {
  return (
    <div>
      
      <Navbar expand="lg" className="bg-dark" variant='dark'>
      <Container fluid>
        <Navbar.Brand href="#">LEE CODER</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"><i className='fas fa-home'></i>Home</Nav.Link>
            <Nav.Link href="/"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Nav.Link href="/"><i className='fas fa-user'></i>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
