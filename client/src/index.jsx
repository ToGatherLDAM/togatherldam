import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LogIn from './components/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }


  render() {
    return (
      <div>
        <LogIn />
        <search />
      </div>
    ); 
  }
}

ReactDOM.render(<App />, document.getElementById('app'));