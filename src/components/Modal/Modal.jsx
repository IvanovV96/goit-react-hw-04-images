import PropTypes from 'prop-types';

const Modal = ({ src, alt, onClick }) => {
  return (
    <div className="modal" onClick={onClick} id="modal">
      <div className="modal-content">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
