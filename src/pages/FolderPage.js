import { getFolderList } from '../api';
import SearchBar from '../components/common/SearchBar';
import useAsync from '../components/hooks/useAsync';
import AddLinkBar from '../components/Folder/AddLinkBar';
import FolderList from '../components/Folder/FolderList';
import Nav from '../components/common/Navbar';

const FolderPage = () => {
  const { result } = useAsync(getFolderList);
  const { data } = result || {};

  return (
    <>
      <Nav style={{ position: 'relative' }} />
      <AddLinkBar folderData={data} />
      <main>
        <SearchBar />
        {data ? <FolderList folderData={data} /> : null}
      </main>
    </>
  );
};
export default FolderPage;
