import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <h1>Landing page</h1>
      <div>
        <div>
          <Link to="shared">shared 페이지</Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
