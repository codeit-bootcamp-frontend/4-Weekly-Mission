import { Link } from 'react-router-dom';
import HomeContainer from './homePageStyle';

const HomePage = () => {
  return (
    <HomeContainer>
      <Link to="/shared">공유 페이지 이동</Link>
      <Link to="/folder">폴더 페이지 이동</Link>
    </HomeContainer>
  );
};

export default HomePage;
