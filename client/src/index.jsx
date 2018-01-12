import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import Login from './components/Login.jsx';

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
       <Search />
       <Login />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//q={this.props.q}