import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Modal from 'components/Modal';

const ImageGalleryItem = ({
  image: { id, webformatURL, tags, largeImageURL },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    document.addEventListener('keydown', escModal);
    return () => {
      document.removeEventListener('keydown', escModal);
    };
  }, []);
  const escModal = e => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = e => {
    if (e.target.id === 'modal') {
      setIsModalOpen(false);
    }
  };
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        onClick={openModal}
      />
      {isModalOpen && (
        <Modal src={largeImageURL} alt={tags} onClick={closeModal} />
      )}
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
