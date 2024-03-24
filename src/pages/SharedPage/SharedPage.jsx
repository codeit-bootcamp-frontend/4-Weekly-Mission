import { Helmet, HelmetProvider } from 'react-helmet-async';
import SharedHeader from '../../components/Shared/SharedHeader';
import CardList from '../../components/CardList/CardList';

function SharedPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Linkbrary - Shared</title>
      </Helmet>
      <SharedHeader />
      <CardList />
    </HelmetProvider>
  );
}

export default SharedPage;
