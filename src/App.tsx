import * as React from 'react'
import {  BrowserRouter as Router, NavLink } from 'react-router-dom'
import Home from './Components/HomePage/home';
import './App.scss'
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router >
          <div className="app-wrapper">
            <nav className="nav-bar">
              <NavLink to="/" exact={true}
                className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ color: 'red' }}
              >Home</NavLink>
              <NavLink to="/cart" exact={true}
                className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ color: 'red' }}
              >Cart</NavLink>
            </nav>
            <Home/>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
