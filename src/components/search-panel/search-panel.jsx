import React, { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

const SearchPanel = ({ updateSearch }) => {
  const [searchText, setSearchText] = useState('');

  const updateSearchWithDebounce = useCallback(debounce(updateSearch, 1000), []);

  const onUpdateSearch = ({ target }) => {
    setSearchText(target.value);

    updateSearchWithDebounce(searchText);
  }

  return (
    <input
      className="form-control"
      type="text"
      value={searchText}
      placeholder="Search movies"
      onChange={onUpdateSearch}
    />
  );
};

SearchPanel.propTypes = {
  updateSearch: PropTypes.func.isRequired
};

export default SearchPanel;