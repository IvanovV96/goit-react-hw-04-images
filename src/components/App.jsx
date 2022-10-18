import { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
const REACT_APP_API_KEY = '30692116-8c99e11975297b99dce2811ab';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    images: [],
    filter: '',
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.images === this.state.images) {
      try {
        const data = await axios.get(`?q=${this.state.filter}`, {
          page: 2,
          key: REACT_APP_API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        });
        const images = data.data.hits;
        this.setState({ images });
      } catch (error) {}
    }
  }
  onSubmit = value => {
    this.setState({ filter: value });
  };
  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
        {images.length > 0 ? <Button /> : null}
      </>
    );
  }
}
