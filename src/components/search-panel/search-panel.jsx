import React, { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

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

export default SearchPanel;