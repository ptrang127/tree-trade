import React from 'react';
import './NavBar.css';
import tree from '../../../assets/images/tree.png';

import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const NavBar: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={tree}
                    height="30"
                    width="30"
                /> Tree Trade</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Careers</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Log In</Nav.Link>
                    <Nav.Link eventKey={2} href="/signup">
                        Sign Up
            </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;