import { Helmet } from 'react-helmet';
import FolderHeader from '../components/Folder/FolderHeader';
import FolderContent from '../components/Folder/FolderContent';

function Folder() {
  return (
    <>
      <Helmet>
        <title>Linkbrary - Folder</title>
      </Helmet>
      <FolderHeader />
      <FolderContent />
    </>
  );
}

export default Folder;
