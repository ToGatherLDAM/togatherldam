import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
<<<<<<< HEAD
import LogIn from './components/Login.jsx';

=======
import Search from './components/Search.jsx';
>>>>>>> master
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
<<<<<<< HEAD
        <LogIn />
        <search />
      </div>
    ); 
=======
       <Search />
      </div>
    );
>>>>>>> master
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//q={this.props.q}