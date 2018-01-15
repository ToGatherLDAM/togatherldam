import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home.jsx'
import MyEvents from './MyEvents.jsx'
import Login from './Login.jsx'
import About from './About.jsx'

const Header = () => (
  <Router>
    <div>
      <ul>
        <button className='headerButton'><Link to="/">Home</Link></button>
        <button className='headerButton'><Link to="/myevents">My Events</Link></button>
        <button className='headerButton'><Link to="/login">Login</Link></button>  
        <button className='headerButton'><Link to="/about">About</Link></button>  
      </ul>

      <hr/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/myevents" component={MyEvents}/>
      <Route path="/login" component={Login}/>   
      <Route path="/about" component={About}/>   
    </Switch>
    </div>
  </Router>
)


export default Header;
    