import { Helmet } from 'react-helmet';
import SharedHeader from '../components/Shared/SharedHeader';
import CardList from '../components/CardList';

function Shared() {
  return (
    <>
      <Helmet>
        <title>Linkbrary - Shared</title>
      </Helmet>
      <SharedHeader />
      <CardList />
    </>
  );
}

export default Shared;
