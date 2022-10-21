import Modal from 'components/Modal';
import { Component } from 'react';

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
