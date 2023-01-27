import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
    <Container>
        <Navbar.Brand>
        <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
    </Container>
  </Navbar>
  
}

export default Header
