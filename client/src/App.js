import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import SignupContainer from './components/SignupContainer';
import LoginContainer from './components/LoginContainer';
import ProjectsPage from './components/ProjectsPage';
import AddProjectContainer from './components/AddProjectContainer';
import MyProjectsPage from './components/MyProjectsPage';




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

 

  const logInWarning = <h1>Log In First!</h1>


  return (

    <Router>
      
      <div>

        <NavBar loggedInUser={loggedInUser} handleLogout={handleLogout} />


        <Routes>

            
          <Route path="/projects" element={loggedInUser.id ? <ProjectsPage projectList={projectList}/> : logInWarning}>
          </Route>
          <Route path="/projects/:id" element={loggedInUser.user_type === 'Professional' && projectList.length ? <>ProjectPage</> : logInWarning}>
          </Route>

          <Route path="/myprojects" element={loggedInUser.user_type === 'Client' && projectList.length ? <MyProjectsPage projectList={projectList.filter(e=>e.client_id===loggedInUser.id)}/> : logInWarning}>
          </Route>

          <Route path="/myprojects/:id" element={loggedInUser.user_type === 'Client' && projectList.length ? <>MyProjectPage</> : logInWarning}>
          </Route>
          

          <Route path="/new-project" element={loggedInUser.user_type === 'Client' ? <AddProjectContainer loggedInUser={loggedInUser} projectList={projectList}/> : logInWarning}>
          </Route>


          <Route path="/home" element={<>{loggedInUser.user_type} Home</>}><>{`${loggedInUser.user_type} Home Page`}</>
          </Route>

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
