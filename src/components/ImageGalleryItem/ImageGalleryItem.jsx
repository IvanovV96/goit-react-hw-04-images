import Modal from 'components/Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = { isModalOpen: false };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = e => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props.image;

    const { isModalOpen } = this.state;
    return (
      <li className="ImageGalleryItem" key={id} onClick={this.openModal}>
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
        {isModalOpen && (
          <Modal src={largeImageURL} alt={tags} onClick={this.closeModal} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
