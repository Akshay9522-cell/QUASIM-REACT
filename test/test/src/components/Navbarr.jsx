import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link,Outlet} from 'react-router-dom'

const Navbarr = () => {
  return (
    <>
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> <Link to="home">Home</Link></Nav.Link>
            <Nav.Link href="#link"> <Link to="about">About</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> <Link to="service">Service</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Facility
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Conatact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Help us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet/>
    </>
  )
}

export default Navbarr
