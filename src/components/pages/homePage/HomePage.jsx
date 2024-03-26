import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div>test</div>
      <Link to="/shared">
        <button>shared</button>
      </Link>
      <Link to="/folder">
        <button>folder</button>
      </Link>
    </>
  );
}

export default HomePage;
