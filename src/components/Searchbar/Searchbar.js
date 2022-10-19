import { Component } from 'react';
import { toast } from 'react-toastify';
class Searchbar extends Component {
  state = {
    inputValue: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { inputValue } = this.state;

    if (this.state.inputValue.trim() === '') {
      toast.error('Enter something to search field.');
      return;
    }
    onSubmit(inputValue);
    this.setState({ inputValue: '' });
  };
  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  render() {
    const { inputValue } = this.state;
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
            onChange={this.handleChange}
            value={inputValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
