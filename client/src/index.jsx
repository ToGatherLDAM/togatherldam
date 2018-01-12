import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CreateEvent from './components/CreateEvent.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  fetchAllEvents() {
    axios.get('/events') 
    .then(response => {
      this.setState({

      })
    })
    .catch(error => {
      console.log('Error');
    })
  }


  render() {
    return (
    <div>
      <CreateEvent />
    </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));