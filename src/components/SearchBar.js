import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter video name..."
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
}
