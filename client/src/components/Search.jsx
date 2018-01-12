import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    console.log('searched',e.target.value)
    this.setState({
      term: e.target.value,
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div id='search'>
      <h1 id='signInTitle'>ToGather</h1>
        <input className="searchBar" value={this.state.terms} onChange={this.onChange} placeholder="find an event"/>
        <button className="searchButton" onClick={this.search}> Search </button>
      </div>);
  }
}

export default Search;
