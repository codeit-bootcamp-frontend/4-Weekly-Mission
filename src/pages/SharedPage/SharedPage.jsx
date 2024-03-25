import { Helmet, HelmetProvider } from 'react-helmet-async';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopContent from '../../components/Shared/TopContent';

function SharedPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Linkbrary - Shared</title>
      </Helmet>
      <TopContent />
      <SearchBar />
      <CardList />
    </HelmetProvider>
  );
}

export default SharedPage;
