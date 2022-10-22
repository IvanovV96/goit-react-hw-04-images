import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img
        src="https://i.pinimg.com/550x/52/a9/44/52a94478ee4e05b734b0a0091d9a1387.jpg"
        alt="sad cat"
      />
      {message}
    </div>
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};
