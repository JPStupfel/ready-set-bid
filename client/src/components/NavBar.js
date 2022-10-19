import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

function NavBar({handleLogout}) {
  const user = useSelector(state=>state)

  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">

          
          {user.user_type === 'Client' ? <Nav.Link href="/#/myprojects">My Projects</Nav.Link> : <> <Nav.Link href="/#/projects">Projects</Nav.Link> <Nav.Link href="/#/my_projects_won">Won Projects</Nav.Link> </>}
         
          {user.user_type === 'Client' ? <Nav.Link href="/#/new-project">New Project</Nav.Link> : null}
          

          </Nav>
        </Container>



    
       
        {user.id ?
         <div className='navbar-image-container'>
          <button onClick={handleLogout}>Logout {user.username}</button>
          <img alt='' className='profile-thumbnail' src={user.image_url}></img>
          </div>
         :
         <Nav>
        <Nav.Link href="/#/login">Login</Nav.Link>
        <Nav.Link href="/#/signup">Signup</Nav.Link>

        </Nav>
        }

      </Navbar>
      
      
    </>
  );
}

export default NavBar;
