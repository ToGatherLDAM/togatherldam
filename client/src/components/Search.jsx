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
      <div>
        Find an event <input value={this.state.terms} onChange={this.onChange} />
        <button onClick={this.search}> Search </button>
      </div>);
  }
}

export default Search;
