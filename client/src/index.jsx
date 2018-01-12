import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }


  render() {
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));