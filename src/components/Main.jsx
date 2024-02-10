import FolderInfo from './FolderInfo';
import SearchBar from './SearchBar';
import LinkList from './LinkList';

function Main() {
  return (
    <main>
      <FolderInfo />
      <div className="main-content">
        <SearchBar />
        <LinkList />
      </div>
    </main>
  );
}

export default Main;
