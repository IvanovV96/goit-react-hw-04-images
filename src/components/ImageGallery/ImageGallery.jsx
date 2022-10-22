import PropTypes from 'prop-types';
import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map(image => {
          return <ImageGalleryItem image={image} key={image.id} />;
        })}
      </ul>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
