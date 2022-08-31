import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ImageUploader from './components/ImageUploader';
import NavBar from './components/NavBar';
import SignupContainer from './components/SignupContainer';
import LoginContainer from './components/LoginContainer';
import ProjectsPage from './components/ProjectsPage';
import AddProjectContainer from './components/AddProjectContainer';




function App() {
  const [loggedInUser, setLoggedInUser] = useState({id: null, username:null, user_type: null, image_url: null})
  const [projectList, setProjectList] = useState([])

  useEffect(()=>{
    fetch('/me').then(r=>r.json()).then(d=>setLoggedInUser(d)).catch(e=>console.log(e))
  },[])

  useEffect(()=>{
    fetch('/mePro').then(r=>r.json()).then(d=>setLoggedInUser(d)).catch(e=>console.log(e))
  },[])

  useEffect(()=>{
    fetch('/proposals').then(r=>r.json()).then(d=>setProjectList(d)).catch(e=>console.log(e))
  },[])

  function handleLogout(){
    fetch('/session', {method: "DELETE"}).then(r=>r.json()).then(d=>setLoggedInUser({id: null, username: null, user_type: null, image_url: null})
  ).catch(e=>console.log(e))
  }

  


  const protecedRoutes = 
  <Routes>
    
    <Route path="/projects" element={
    <ProjectsPage projectList={projectList} />
    }>
    </Route>

    <Route path="/new-project" element={
    <AddProjectContainer loggedInUser={loggedInUser} projectList={projectList} />
    }>
    </Route>


    <Route path="/home" element={<>{loggedInUser.user_type} Home</>}>
      <>Client Home</>
    </Route>

  </Routes>

  return (

    <Router>
      
      <div>

     {<NavBar loggedInUser={loggedInUser} handleLogout={handleLogout} />}

    {loggedInUser.id ? protecedRoutes : <h1>Log in or Sign up!</h1>}

    
    <Routes>
    <Route path="/signup" element={<SignupContainer setLoggedInUser={setLoggedInUser} />}>
    </Route>
    <Route path="/login" element={<LoginContainer setLoggedInUser={setLoggedInUser} />}>
    </Route>
    </Routes>

      </div>

    </Router>
 
  
     
  
  );
}

export default App;
