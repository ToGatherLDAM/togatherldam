import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import SearchMyEvent from './SearchMyEvent.jsx'

const MyEvents = () => (
  <div>
    <h1>MyEvents</h1>
    <div><SearchMyEvent /></div>
    <div>List</div>

  </div>
 
)
export default MyEvents;
