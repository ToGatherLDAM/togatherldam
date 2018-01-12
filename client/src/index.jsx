import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import CreateEvent from './components/CreateEvent.jsx'




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    this.fetchAllEvents = this.fetchAllEvents.bind(this);
  }

  fetchAllEvents() {
    axios.get('/events') 
    .then(response => {
      this.setState({
        events: response
      })
    })
    .catch(error => {
      console.log('Error');
    })
  }

  componentDidMount() {
    this.fetchAllEvents();
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