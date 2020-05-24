import React, { Component } from 'react'
import {  Navbar } from "react-bootstrap";


class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
      <Navbar className="navbar-dark" bg="dark" expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
      </Navbar>
    );
  }
}
 
export default NavBar;