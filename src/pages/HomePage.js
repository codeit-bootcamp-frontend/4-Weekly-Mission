import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ width: '100%', height: '500px', fontSize: '100px' }}>
      <Link to="/shared">Shared로 이동</Link>
      <br />
      <Link to="/folder">Folder로 이동</Link>
    </div>
  );
};

export default HomePage;
