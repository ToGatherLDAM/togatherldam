import React from 'react';
import Icon from 'react-icon-base';
import Axios from 'axios';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      location: '',
      event_date: '',
      start_time: '',
      end_time: '',
      price: '',
      yes: 0,
      no: 0,
      maybe: 0
    };

    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleStTime = this.handleStTime.bind(this);
    this.handleEnTime = this.handleEnTime.bind(this);
    this.handlePrice = this.handlePrice.bind(this);

    this.handleSave = this.handleSave.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }

  handleLocation(event) {
    this.setState({
      location: event.target.value,
    });
  }

  handleDate(event) {
    this.setState({
      event_date: event.target.value,
    });
  }

  handleStTime(event) {
    this.setState({
      start_time: event.target.value,
    });
  }

  handleEnTime(event) {
    this.setState({
      end_time: event.target.value,
    });
  }

  handlePrice(event) {
    this.setState({
      price: event.target.value,
    });
  }

  handleSave() {
    // console.log('client', this.state.name)
    Axios.post('/', {
      name: this.state.name,
      description: this.state.description,
      location: this.state.location,
      event_date: this.state.event_date,
      start_time: this.state.start_time,
      end_time: this.state.end_time,
      price: this.state.price,
      yes: 0,
      no: 0,
      maybe: 0
    })
    .then((response) => {
      console.log('Event is created');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSave}>
        <div>Name:
          <input type='text' value={this.state.name} onChange={this.handleName}/>
        </div>
        <div>Description:
          <input type='text' value={this.state.description} onChange={this.handleDescription}/>
        </div>
        <div>Location:
          <input type='text' value={this.state.location} onChange={this.handleLocation}/>
        </div>
        <div>Date:
          <input type='text' value={this.state.event_date} onChange={this.handleDate}/>
        </div>
        <div>Start Time:
          <input type='text' value={this.state.start_time} onChange={this.handleStTime}/>
        </div>
        <div>End Time:
          <input type='text' value={this.state.end_time} onChange={this.handleEnTime}/>
        </div>
        <div>Price:
          <input type='text' value={this.state.price} onChange={this.handlePrice}/>
        </div>

        <input type='submit' value='Submit' />
      </form>

    );
  }
}

export default CreateEvent;
