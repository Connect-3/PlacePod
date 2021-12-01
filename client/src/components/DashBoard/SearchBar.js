import React from 'react';

const SearchBar = ({ setSearchTerm, searchTerm }) => {
  return (
    <div className="ui" id="searchbar">
      <input
        type="text"
        id="searchbar-input"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBar;
