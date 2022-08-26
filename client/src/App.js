import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ProposalsPage from './components/ProposalsPage';
import NavBar from './components/NavBar';
import SignupContainer from './components/SignupContainer';
import LoginContainer from './components/LoginContainer';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(()=>{
    fetch('/me').then(r=>r.json()).then(d=>setLoggedInUser(d.id)).catch(e=>alert(e))
  },[])

  function handleLogout(){
    fetch('/session', {method: "DELETE"}).then(r=>r.json()).then(d=>console.log(d)).catch(e=>console.log(e))
  }


  const protectedRoutes = 
  <Routes>
    
    <Route path="/projects" element={<ProposalsPage />}>
    </Route>


    <Route path="/">
      <>Home</>
    </Route>

  </Routes>


  return (

    <Router>
      
      <div>

     {<NavBar handleLogout={handleLogout} />}

    {loggedInUser ? protectedRoutes : <>Log in or Sign up!</>}
    <Routes>
    <Route path="/signup" element={<SignupContainer />}>
    </Route>
    <Route path="/login" element={<LoginContainer />}>
    </Route>
    </Routes>

      </div>

    </Router>
 
  
     
  
  );
}

export default App;
