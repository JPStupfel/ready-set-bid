import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import SignupContainer from './components/SignupContainer';
import LoginContainer from './components/LoginContainer';
import ProjectsPage from './components/ProjectsPage';
import AddProjectContainer from './components/AddProjectContainer';
import MyProjectsPage from './components/MyProjectsPage';
import ViewMyProjectPage from './components/ViewMyProjectPage';
import ViewProjectProPage from './components/ViewProjectProPage';
import MyWonProjectsPage from './components/MyWonProjectsPage';
import ViewWonProjectPage from './components/ViewWonProjectPage';
import {connect, useSelector, useDispatch} from 'react-redux'
import LoggedOutHome from './components/LoggedOutHome';



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

 
  const [projectList, setProjectList] = useState([])

  useEffect(()=>{console.log(user)},[user])

  useEffect(()=>{
    fetch('/me').then(r=>r.json()).then(d=>setUser(d)).catch(e=>console.log(e))
  },[])

  useEffect(()=>{
    fetch('/mePro').then(r=>r.json()).then(d=>setUser(d)).catch(e=>console.log(e))
  },[])

  useEffect(()=>{
    fetch('/proposals').then(r=>r.json()).then(d=>setProjectList(d)).catch(e=>console.log(e))
  },[user])

  function handleLogout(){
    fetch('/session', {method: "DELETE"}).then(r=>r.json()).then(d=>setUser({id: null, username: null, user_type: null, image_url: null})
  ).catch(e=>console.log(e))
  }

 

  const logInWarning = <h1>Log In First!</h1>
  const openProjectList = projectList.length ? projectList.filter(project=>!project.victor_id) : null
  const closedProjectList = projectList.length ? projectList.filter(projects=>projects.victor_id) : null


  return (

    <Router>
      <div>
        <NavBar handleLogout={handleLogout} />
        <Routes>

           {/* routes for everybody */}
          <Route path="/signup" exact element={<SignupContainer setUser={setUser} />}>
          </Route>
          <Route path="/login" exact element={<LoginContainer setUser={setUser} />}>
          </Route>
          </Routes>

          {// rescue from nomethod error while loading projectList
          projectList.length ?
        <Routes>
            {/* routes for pros */}
            <Route path="/projects" exact element={user.user_type === 'Professional' ? <ProjectsPage projectList={openProjectList}/> : logInWarning}>
            </Route>
            <Route path="/projects/:id" exact element={user.user_type === 'Professional' ? <ViewProjectProPage /> : logInWarning}>
            </Route>

            <Route path="/my_projects_won" exact element={user.user_type === 'Professional' ? <MyWonProjectsPage projectList={closedProjectList} /> : logInWarning}>
            </Route>

            <Route path="/my_projects_won/:id" exact element={user.user_type === 'Professional' ? <ViewWonProjectPage /> : logInWarning}>
            </Route>

            {/* routes for client */}
            <Route path="/myprojects" exact element={user.user_type === 'Client' ? <MyProjectsPage projectList={projectList.filter(e=>e.client_id===user.id)}/> : logInWarning}>
            </Route>
            <Route path="/myprojects/:id" exact element={user.user_type === 'Client' ? <ViewMyProjectPage setProjectList={setProjectList}  projectList={projectList} /> : logInWarning}>
            </Route>
            <Route path="/new-project" exact element={user.user_type === 'Client' ? <AddProjectContainer setProjectList={setProjectList}  projectList={projectList}/> : logInWarning}>
            </Route>
        </Routes>

        : <LoggedOutHome/>
        }
      </div>
    </Router>

  );
}


export default connect(store=>store)(App);
