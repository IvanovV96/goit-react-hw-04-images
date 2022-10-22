import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = { isModalOpen: false };
  componentDidMount() {
    document.addEventListener('keydown', this.escModal);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escModal);
  }

  escModal = e => {
    if (e.key === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = e => {
    if (e.target.id === 'modal') {
      this.setState({ isModalOpen: false });
    }
  };
  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <li className="ImageGalleryItem" key={id}>
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />
        {isModalOpen && (
          <Modal src={largeImageURL} alt={tags} onClick={this.closeModal} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
