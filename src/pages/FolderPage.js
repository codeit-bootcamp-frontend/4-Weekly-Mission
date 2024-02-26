import { Helmet, HelmetProvider } from 'react-helmet-async';
import FolderHeader from '../components/Folder/FolderHeader';
import FolderContent from '../components/Folder/FolderContent';

function FolderPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Linkbrary - Folder</title>
      </Helmet>
      <FolderHeader />
      <FolderContent />
    </HelmetProvider>
  );
}

export default FolderPage;
