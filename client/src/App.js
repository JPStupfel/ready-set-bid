import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import SignupContainer from './components/SignupContainer';
import LoginContainer from './components/LoginContainer';
import ProjectsProPage from './components/ProjectsProPage';
import AddProjectContainer from './components/AddProjectContainer';
import MyProjectsPage from './components/MyProjectsPage';
import ViewMyProjectPage from './components/ViewMyProjectPage';
import ViewProjectProPage from './components/ViewProjectProPage';
import MyWonProjectsPage from './components/MyWonProjectsPage';
import ViewWonProjectPage from './components/ViewWonProjectPage';
import {connect, useSelector, useDispatch} from 'react-redux'
import LoggedOutHome from './components/LoggedOutHome';
import './components/scss/react.scss'



function App() {

  const user = useSelector(state=>state)
  const dispatch = useDispatch()
  function setUser(newUser){
    const action = {
      type: 'SET_USER'
    }
    Object.keys(user).forEach(key=>action[key]=newUser[key])
    dispatch(action)
  }

  useEffect(()=>{
    fetch('/me').then(r=>r.json()).then(d=>setUser(d)).catch(e=>console.log(e))
  },[])

  useEffect(()=>{
    fetch('/mePro').then(r=>r.json()).then(d=>setUser(d)).catch(e=>console.log(e))
  },[])


  function handleLogout(){
    fetch('/session', {method: "DELETE"}).then(r=>r.json()).then(d=>setUser({id: null, username: null, user_type: null, image_url: null})
  ).catch(e=>console.log(e))
  }

  const logInWarning = <>Log in first</>

  return (

    <Router>

      <div>

        <NavBar handleLogout={handleLogout} />


          {/* routes if not logged in */}
        { !user.user_type ?  
          <Routes>
              <Route path="/signup" exact element={<SignupContainer setUser={setUser} />}>
              </Route>
              <Route path="/login" exact element={<LoginContainer setUser={setUser} />}>
              </Route>
              <Route path="/*"  element={<LoggedOutHome/>}>
              </Route>
          </Routes>
          :
          null
          }

         
        <Routes>
            {/* routes for pros */}
            <Route path="/projects" exact element={user.user_type === 'Professional' ? <ProjectsProPage/> : logInWarning}>
            </Route>
            <Route path="/projects/:id" exact element={user.user_type === 'Professional' ? <ViewProjectProPage /> : logInWarning}>
            </Route>

            <Route path="/my_projects_won" exact element={user.user_type === 'Professional' ? <MyWonProjectsPage /> : logInWarning}>
            </Route>

            <Route path="/my_projects_won/:id" exact element={user.user_type === 'Professional' ? <ViewWonProjectPage /> : logInWarning}>
            </Route>

            {/* routes for client */}
            <Route path="/myprojects" exact element={user.user_type === 'Client' ? <MyProjectsPage/> : logInWarning}>
            </Route>
            <Route path="/myprojects/:id" exact element={user.user_type === 'Client' ? <ViewMyProjectPage /> : logInWarning}>
            </Route>
            <Route path="/new-project" exact element={user.user_type === 'Client' ? <AddProjectContainer /> : logInWarning}>
            </Route>
        </Routes>

      
        
      </div>
    </Router>

  );
}


export default connect(store=>store)(App);
