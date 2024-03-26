import { Helmet, HelmetProvider } from 'react-helmet-async';
import TopContent from '../../components/Folder/TopContent/TopContent';
import MainContent from '../../components/Folder/MainContent/MainContent';

function FolderPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Linkbrary - Folder</title>
      </Helmet>
      <TopContent />
      <MainContent />
    </HelmetProvider>
  );
}

export default FolderPage;
