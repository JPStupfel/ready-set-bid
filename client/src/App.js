import './App.css';
// import MapContainer from './components/MapContainer';
// import PostForm from './PostForm';
// import { createContext, useState } from 'react';
// import FileForm from './components/FileForm';
// import LatestImage from './components/LatestImage';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ProposalsPage from './components/ProposalsPage';
import NavBar from './components/NavBar';

function App() {
  return (

    <Router>
      
      <div>

     {<NavBar />}

        <Routes>
          
          <Route path="/proposals" element={<ProposalsPage />}>
          </Route>

          <Route path="/users">
            <>Users</>
          </Route>

          <Route path="/">
            <>Home</>
          </Route>

        </Routes>

      </div>

    </Router>
 
  
     
  
  );
}

export default App;
