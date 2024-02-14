import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

function Shared() {
  return (
    <>
      <Helmet>
        <title>Linkbrary - 공유하기</title>
      </Helmet>
      <Header />
      <Nav />
      <CardList />
      <Footer />
    </>
  );
}

export default Shared;
