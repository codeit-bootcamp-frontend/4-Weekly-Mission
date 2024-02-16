import { Helmet } from 'react-helmet';
import FolderHeader from '../components/FolderHeader';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

function Shared() {
  return (
    <>
      <Helmet>
        <title>Linkbrary - Folder</title>
      </Helmet>
      <FolderHeader />
      <CardList />
      <Footer />
    </>
  );
}

export default Shared;
