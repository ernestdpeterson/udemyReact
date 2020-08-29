import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue br2'
        type='search' 
        placeholder="Search Kitties"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;