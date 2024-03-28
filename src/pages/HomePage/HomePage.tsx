import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to="/shared">/shared</Link>
      <br />
      <Link to="/folder">/folder</Link>
    </>
  );
};

export default HomePage;
