import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchNewEvent from './SearchNewEvent.jsx'
import CreateEvent from './CreateEvent.jsx'
// import HostingComponent from './HostingComponent.jsx'
// import PopoutWindow from 'react-popout'

const Home = () => (
  <div>
    <h2>Home</h2>
    <div>
      <SearchNewEvent />
    </div>
    <div>
      <CreateEvent />
    </div>
  </div>
)
export default Home;
      // <HostingComponent />