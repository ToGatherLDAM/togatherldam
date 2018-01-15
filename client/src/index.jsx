import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Header from './components/Header.jsx';
// import Main from './components/Main.jsx';

const App = () => (
  <div>
    <Header />
  </div>
  )

ReactDOM.render(
    <App />
  , document.getElementById('app'));
