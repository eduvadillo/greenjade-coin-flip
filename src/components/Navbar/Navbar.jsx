import React from "react";
import "./Navbar.css";
import logoWhite from "../..//images/logoWhite.png";
import { Nav, Navbar } from "react-bootstrap";

const NavbarCom = () => {
  return (
    <Navbar className='nav hola' fixed='top' expand='lg'>
      <Navbar.Brand href='#home'>
        <img className='logo-white' src={logoWhite}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>ABOUT GREEN JADE GAMES</Nav.Link>
          <Nav.Link href='#link'>GAMES</Nav.Link>
          <Nav.Link href='#home'>CONTACT</Nav.Link>
          <Nav.Link href='#link'>CAREERS</Nav.Link>
          <Nav.Link href='#link'>CLIENT LOGIN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCom;
