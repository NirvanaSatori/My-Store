import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return <Navbar>
    <Container>
        <Navbar.Brand>
            <a href="/"> Shopping Cart</a>
        </Navbar.Brand>
    </Container>
  </Navbar>
  
}

export default Header
