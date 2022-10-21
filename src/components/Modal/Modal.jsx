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
