import NavBar from './NavBar.js';
import Footer from './Footer.js';
import CardList from './CardList.js';
import Bookmark from './Bookmark.js';
import { getBookmark } from '../api.js';
import { useState, useEffect } from 'react';

function App() {
  const [folderInfo, setFolderInfo] = useState({
    ownerName: '',
    folderName: '',
    ownerProfileImg: '',
  });
  const [links, setLinks] = useState([]);

  const handleLoadBookmark = async () => {
    let result;
    try {
      result = await getBookmark();
      setFolderInfo({
        ownerName: result.folder.owner.name,
        folderName: result.folder.name,
        ownerProfileImg: result.folder.owner.profileImageSource,
      });
      setLinks(result.folder.links);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    handleLoadBookmark();
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Bookmark folderInfo={folderInfo} />
        <CardList links={links} />
      </main>
      <Footer />
    </>
  );
}

export default App;
