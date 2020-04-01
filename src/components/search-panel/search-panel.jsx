import React, { Component } from 'react';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }
  }

  onUpdateSearch = ({ target }) => {
    const searchText = target.value;
    this.setState({searchText});
    this.props.updateSearch(searchText);
  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        placeholder="Search movies"
        onChange={this.onUpdateSearch}
      />
    )
  }
}

export default SearchPanel;