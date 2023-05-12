import './SearchBar.css'
import { useState } from "react";


function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("cars");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;
