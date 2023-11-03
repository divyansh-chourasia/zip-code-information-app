import React from 'react'

const Search = ({ postalCode, setPostalCode, handleLookup }) => {
  return (
    <section className='search-component'>
      <h1 className='search-heading'>Postal Code Lookup</h1>
      <input
        type="text"
        placeholder="Enter Postal Code"
        className='search-input'
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button className="myButton" onClick={handleLookup}>Find...</button>
    </section>
  );
};

export default Search;
