import { useEffect, useState } from 'react';
import SearchTopBodyArea from '../pages/SearchTopBodyArea';
import ContentsArea from '../pages/ContentsArea';
import PopAddFolderButton from '../components/PopAddFolderButton';
import ListTitleArea from '../components/ListTitleArea';
import FolderNames from '../components/FolderNames';
import addIcon from '../assets/purple_add.svg';
import { getFolders } from '../utils/apis';
import { getLinks } from '../utils/apis';

const FolderPage = () => {
  const [foldersList, setFoldersList] = useState([]);
  const [linkList, setLinkList] = useState({});
  const [displayPopButton, setDisplayPopButton] = useState(false);
  const [selectFolderName, setSelectFolderName] = useState('');
  const userId = '4';

  const handleLoad = async () => {
    const { data } = await getLinks(userId, '');
    const folders = await getFolders(userId);

    setFoldersList([...folders.data]);
    setLinkList({ links: [...data] });
    setDisplayPopButton(linkList.links?.length >= 1 && true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const handleOnClick = async (folderName, list = []) => {
    if (folderName === 'all') {
      const { data } = await getLinks(userId, '');
      setSelectFolderName('전체');
      setLinkList({ links: [...data] });
      setDisplayPopButton(data.length >= 1 && true);
    } else {
      setSelectFolderName(folderName);
      setLinkList({ links: [...list] });
      setDisplayPopButton(list.length >= 1 && true);
    }
  };

  return (
    <>
      <SearchTopBodyArea></SearchTopBodyArea>
      {linkList.links && (
        <ContentsArea links={linkList.links}>
          {foldersList.length > 0 && (
            <>
              <div className="folder_button_area">
                <div className="folder_buttons_area">
                  <button
                    onClick={() => handleOnClick('all')}
                    className="folder_button "
                  >
                    전체
                  </button>
                  {foldersList &&
                    foldersList.map((folder) => {
                      return (
                        <FolderNames
                          name={folder.name}
                          key={folder.id}
                          id={folder.id}
                          userId={userId}
                          onClick={handleOnClick}
                        ></FolderNames>
                      );
                    })}
                </div>
                <div className="add_folder_text_area">
                  <p className="add_folder_text">폴더추가</p>
                  <img src={addIcon} />
                </div>
              </div>
            </>
          )}
          <ListTitleArea title={selectFolderName}></ListTitleArea>
        </ContentsArea>
      )}
      {displayPopButton && <PopAddFolderButton></PopAddFolderButton>}
    </>
  );
};

export default FolderPage;
