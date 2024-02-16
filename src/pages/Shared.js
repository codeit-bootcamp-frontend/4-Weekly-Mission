import { Helmet } from 'react-helmet';
import SharedHeader from '../components/Shared/SharedHeader';
import CardList from '../components/CardList';
import Footer from '../components/Footer/Footer';

function Shared() {
  return (
    <>
      <Helmet>
        <title>Linkbrary - Shared</title>
      </Helmet>
      <SharedHeader />
      <CardList />
      <Footer />
    </>
  );
}

export default Shared;
