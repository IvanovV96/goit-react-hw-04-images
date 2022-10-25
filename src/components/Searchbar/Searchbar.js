import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Enter something to search field.');
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };
  const handleChange = e => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={inputValue}
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
