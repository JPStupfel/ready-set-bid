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
import ViewMyProjectPage from './components/ViewMyProjectPage';
import ViewProjectProPage from './components/ViewProjectProPage';




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

           {/* routes for everybody */}
           <Route path="/home" exact element={<>{loggedInUser.user_type} Home</>}><>{`${loggedInUser.user_type} Home Page`}</>
          </Route>
          <Route path="/signup" exact element={<SignupContainer setLoggedInUser={setLoggedInUser} />}>
          </Route>
          <Route path="/login" exact element={<LoginContainer setLoggedInUser={setLoggedInUser} />}>
          </Route>
          </Routes>

          {// rescue from nomethod error while loading projectList
          projectList.length ?
        <Routes>
            {/* routes for pros */}
            <Route path="/projects" exact element={loggedInUser.user_type === 'Professional' ? <ProjectsPage projectList={projectList}/> : logInWarning}>
            </Route>
            <Route path="/projects/:id" exact element={loggedInUser.user_type === 'Professional' ? <ViewProjectProPage loggedInUser={loggedInUser}/> : logInWarning}>
            </Route>
            {/* routes for client */}
            <Route path="/myprojects" exact element={loggedInUser.user_type === 'Client' ? <MyProjectsPage projectList={projectList.filter(e=>e.client_id===loggedInUser.id)}/> : logInWarning}>
            </Route>
            <Route path="/myprojects/:id" exact element={loggedInUser.user_type === 'Client' ? <ViewMyProjectPage setProjectList={setProjectList}  projectList={projectList} /> : logInWarning}>
            </Route>
            <Route path="/new-project" exact element={loggedInUser.user_type === 'Client' ? <AddProjectContainer loggedInUser={loggedInUser} projectList={projectList}/> : logInWarning}>
            </Route>
        </Routes>

        : <>Make sure you are logged in.</>
        }


      </div>

    </Router>

  );
}

export default App;
