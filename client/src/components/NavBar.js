import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


export class NavBar extends PureComponent {
  render() {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    )
  }
}

export default NavBar