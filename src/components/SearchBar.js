import {useState} from 'react';

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('')
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term)
  };

  const handleChange = (e) =>{
    setTerm(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;
