import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 50,
      }}
    >
      <RotatingLines strokeColor="#3f51b5" />
    </div>
  );
};

export default Loader;
