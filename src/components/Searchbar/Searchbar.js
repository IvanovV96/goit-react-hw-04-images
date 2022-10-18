import { Component } from 'react';

class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const inputValue = e.currentTarget.elements[1].value;
    onSubmit(inputValue);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
