import { useEffect, useState } from 'react';
import SearchTopBodyArea from '../pages/SearchTopBodyArea';
import ContentsArea from '../pages/ContentsArea';
import PopAddFolderButton from '../components/PopAddFolderButton';
import ListTitleArea from '../components/ListTitleArea';
import FolderNames from '../components/FolderNames';
import { getFolders } from '../utils/apis';
import { getLinks } from '../utils/apis';

const FolderPage = () => {
  const [foldersList, setFoldersList] = useState([]);
  const [linkList, setLinkList] = useState({});
  const [displayPopButton, setDisplayPopButton] = useState(false);

  const handleLoad = async () => {
    const { data } = await getLinks('1'); //userId
    const folders = await getFolders('1'); //userId

    setFoldersList([...folders.data]);
    setLinkList({ links: [...data] });
    setDisplayPopButton(linkList.links?.length >= 1 && true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <SearchTopBodyArea></SearchTopBodyArea>
      {linkList.links && (
        <ContentsArea links={linkList.links}>
          {foldersList.length > 0 && (
            <FolderNames folders={foldersList}></FolderNames>
          )}
          <ListTitleArea></ListTitleArea>
        </ContentsArea>
      )}
      {displayPopButton && <PopAddFolderButton></PopAddFolderButton>}
    </>
  );
};

export default FolderPage;
