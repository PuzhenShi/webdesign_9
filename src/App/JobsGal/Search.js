// src/components/Search.js

import React, { useState } from 'react';
import SearchList from './SearchList';
import './jobgal.css';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
        <SearchList filteredPersons={filteredPersons} />
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h1 className="f2" id="searchtxt">Search Positions</h1>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search Positions" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;