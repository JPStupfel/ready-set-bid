import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


export default function NavBar({handleLogout}) {
  
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout}>logout</button>
        </div>
    )
  
}

