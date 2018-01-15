import React from 'react';
import Axios from 'axios';

class SearchNewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeToSearch: '',
      place: []
    };

    this.onChange = this.onChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  onChange(e) {
    console.log('searched',e.target.value)
    this.setState({
      placeToSearch: e.target.value,
    });
  }

  handleSearch(placeToSearch) {
    Axios.post('/search', {
      placeToSearch: this.state.placeToSearch
    })
    .then(response => {
      this.setState({
        place: response.businesses
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        Find an Event <input value={this.state.placeToSearch} onChange={this.onChange} />
        <button onClick={this.handleSearch}> Search </button>
      </div>);
  }
}

export default SearchNewEvent;
