const Error = ({ message }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img
        src="https://pbs.twimg.com/profile_images/1155645244563742721/tuCu6BT-_400x400.jpg"
        alt="sad cat"
      />
      {message}
    </div>
  );
};

export default Error;
