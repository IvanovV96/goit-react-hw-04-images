import PropTypes from 'prop-types';
import { Component } from 'react';

class Modal extends Component {
  render() {
    const { src, alt, onClick } = this.props;
    return (
      <div className="modal" onClick={onClick} id="modal">
        <div className="modal-content">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
