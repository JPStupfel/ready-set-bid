import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ProposalsPage from './components/ProposalsPage';
import NavBar from './components/NavBar';
import SignupContainer from './components/SignupContainer';
import LoginContainer from './components/LoginContainer';



function App() {
  const [loggedInUser, setLoggedInUser] = useState({user_id: null, username:null, user_type: null})

  useEffect(()=>{
    fetch('/me').then(r=>r.json()).then(d=>setLoggedInUser({user_id: d.user_id, user_type: d.user_type, username: d.username})).catch(e=>console.log(e))
  },[])

  useEffect(()=>{
    fetch('/mePro').then(r=>r.json()).then(d=>setLoggedInUser({user_id: d.user_id, user_type: d.user_type, username: d.username})).catch(e=>console.log(e))
  },[])

  function handleLogout(){
    fetch('/session', {method: "DELETE"}).then(r=>r.json()).then(d=>setLoggedInUser({user_id: null, username: null, user_type: null})
  ).catch(e=>console.log(e))
  }


  const protecedRoutes = 
  <Routes>
    
    <Route path="/projects" element={
    <ProposalsPage />
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

    {loggedInUser.user_id ? protecedRoutes : <h1>Log in or Sign up!</h1>}

    
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
