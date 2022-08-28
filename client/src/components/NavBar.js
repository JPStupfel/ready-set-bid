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
          <Nav.Link href="projects">Projects</Nav.Link>
          <Nav.Link href="/new-project">New Project</Nav.Link>
          
          </Nav>
        </Container>

        <Nav>
        <Nav.Link href="login">Login</Nav.Link>
        <Nav.Link href="signup">Signup</Nav.Link>

        </Nav>
       
        {loggedInUser.id ?
         <div className='navbar-image-container'>
          <button onClick={handleLogout}>Logout {loggedInUser.username}</button>
          <img className='profile-thumbnail' src={loggedInUser.image_url}></img>
          </div>
         :null}

      </Navbar>
      
      
    </>
  );
}

export default NavBar;