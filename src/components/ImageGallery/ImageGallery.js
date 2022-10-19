import ImageGalleryItem from 'components/ImageGalleryItem';
import { Component } from 'react';

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
