import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from 'components/Loader';
import Error from 'components/ErrorMsg';
import fetchImg from 'services/pixabay-api';
import Button from './Button';

export class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    images: [],
    status: 'idle',
    error: null,
  };

  switchStatus = (status, images) => {
    if (status === 'idle') {
      return <p>Enter your request</p>;
    }
    if (status === 'pending') {
      return (
        <>
          <ImageGallery images={images} />
          <Loader />
        </>
      );
    }
    if (status === 'rejected') {
      return <Error message={this.state.error} />;
    }
    if (status === 'resolved') {
      return <ImageGallery images={images} />;
    }
  };

  onSubmit = value => {
    this.setState({ inputValue: value });
  };
  onButtonClick = e => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      try {
        this.setState({ status: 'pending' });
        const imagesOne = await fetchImg(inputValue, page);
        const images = [...prevState.images, ...imagesOne];
        if (images.length === 0) {
          this.setState({
            status: 'rejected',
            error: `There is no photo by ${inputValue} request`,
          });
          return;
        }
        this.setState({ images, status: 'resolved' });
      } catch (error) {
        this.setState({ error: error.message, status: 'rejected' });
      }
    }
  }

  render() {
    const { status, images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {this.switchStatus(status, images)}
        {images.length > 11 && <Button onClick={this.onButtonClick} />}
        <ToastContainer />
      </>
    );
  }
}
