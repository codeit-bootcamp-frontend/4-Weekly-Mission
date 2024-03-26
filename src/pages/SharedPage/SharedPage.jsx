import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopContent from '../../components/Shared/TopContent/TopContent';
import SharedCards from '../../components/Shared/SharedCards/SharedCards';

function SharedPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Linkbrary - Shared</title>
      </Helmet>
      <TopContent />
      <SearchBar />
      <SharedCards />
    </HelmetProvider>
  );
}

export default SharedPage;
