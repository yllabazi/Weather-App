import React from 'react';
import InputField from '../elements/InputField';
import SearchBtn from '../elements/SearchBtn';

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <InputField />
      <SearchBtn />
    </div>
  )
}

export default SearchBar;