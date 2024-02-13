import { Nav } from './components/Nav';
// import CardList from '/components/CardList/index';
import { FolderInfo } from './components/Info';
import { SearchBar } from './components/Search';
import { Footer } from './components/Footer';

import "./global.css";
import { useGetFolder } from './components/data/useGet'

function App() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return ( // 할 일: 컨테이너 하나를 더 만들어서 감싸기
    <div>
      <Nav />
      <FolderInfo profileImage={profileImage} ownerName={ownerName} folderName={folderName} />
      <div className="search-bar-container"> 
        <SearchBar />
      </div>
      <Footer />
    </div> 
  );
}

export default App;