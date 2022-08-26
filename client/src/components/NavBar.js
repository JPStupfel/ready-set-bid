import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({handleLogout, loggedInUser}) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="projects">Projects</Nav.Link>

            <Nav.Link href="signup">Signup</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Container>
       
        {loggedInUser.user_id ? <button onClick={handleLogout}>Logout {loggedInUser.username}</button>:null}

      </Navbar>
      
      
    </>
  );
}

export default NavBar;