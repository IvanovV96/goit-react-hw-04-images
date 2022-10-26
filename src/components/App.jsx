import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from 'components/Loader';
import Error from 'components/ErrorMsg';
import fetchImg from 'services/pixabay-api';
import Button from './Button';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [showButton, setShowButton] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      if (inputValue === '') return;
      setStatus('pending');
      setShowButton(false);
      try {
        const data = await fetchImg(inputValue, page);
        const imagesA = data.hits;
        if (imagesA.length === 0) {
          setStatus('rejected');
          setError(`There is no photo by ${inputValue} request`);
          setShowButton(false);
          return;
        }
        setTotal(data.totalHits);
        setStatus('resolved');
        setImages(prev => {
          return [...prev, ...imagesA];
        });

        if (imagesA.length > 11) {
          setShowButton(true);
        }
      } catch (error) {
        setStatus('rejected');
        setError(error.toString());
      }
    }
    fetchData();
  }, [inputValue, page]);

  useEffect(() => {
    if (images.length >= total) {
      setShowButton(false);
    }
  }, [images.length, total]);

  const onSubmit = value => {
    setInputValue(value);
    setPage(1);
    setImages([]);
  };

  const onButtonClick = () => {
    setPage(state => state + 1);
  };

  const switchStatus = (status, images) => {
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
      return <Error message={error} />;
    }
    if (status === 'resolved') {
      return <ImageGallery images={images} />;
    }
  };
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {switchStatus(status, images)}
      {showButton && <Button onClick={onButtonClick} />}
      <ToastContainer />
    </>
  );
};
