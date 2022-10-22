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
    showButton: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.state;
    if (prevState.page !== page || prevState.inputValue !== inputValue) {
      this.setState({ status: 'pending', showButton: false });

      try {
        const fetchedData = await fetchImg(inputValue, page);
        const total = fetchedData.totalHits;
        const images = fetchedData.hits;
        if (images.length === 0) {
          this.setState({
            status: 'rejected',
            error: `There is no photo by ${inputValue} request`,
            images: [],
            showButton: false,
          });
          return;
        }
        if (images.length > 11) {
          this.setState({ showButton: true });
        }
        if (prevState.inputValue !== inputValue) {
          this.setState({ images, status: 'resolved' });
        } else {
          const imagesAll = [...prevState.images, ...images];
          if (imagesAll.length >= total) this.setState({ showButton: false });
          this.setState({ images: imagesAll, status: 'resolved' });
        }
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  onSubmit = value => {
    this.setState({ inputValue: value, page: 1, images: [] });
  };
  onButtonClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
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
  render() {
    const { status, images, showButton } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {this.switchStatus(status, images)}
        {showButton && <Button onClick={this.onButtonClick} />}
        <ToastContainer />
      </>
    );
  }
}
