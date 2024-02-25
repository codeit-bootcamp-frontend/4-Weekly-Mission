import { useEffect, useState } from 'react';
import SearchTopBodyArea from '../components/area/SearchTopBodyArea';
import ContentsArea from '../components/area/ContentsArea';
import PopAddFolderButton from '../components/common/PopAddFolderButton';
import ListTitleArea from '../components/area/ListTitleArea';
import FolderNames from '../components/FolderNames';
import addIcon from '../assets/purple_add.svg';
import { getApi } from '../utils/apis';

const FolderPage = () => {
  const [foldersList, setFoldersList] = useState([]);
  const [linkList, setLinkList] = useState({});
  const [selectFolderName, setSelectFolderName] = useState('');
  const [selectFolder, setSelectFolder] = useState(false);
  // TODO: 데이터 받아온 뒤 수정 예정
  const userId = '4';

  const handleLoad = async () => {
    const { data } = await getApi(`/users/${userId}/links`);
    const folders = await getApi(`/users/${userId}/folders`);

    setFoldersList([{ name: '전체', id: 'all' }, ...folders.data]);
    setLinkList({ links: [...data] });
  };

  useEffect(() => {
    handleLoad();
    setSelectFolderName('all');
  }, []);

  const handleOnClick = async (folderName, list = []) => {
    setSelectFolderName(folderName);
    setLinkList({ links: [...list] });
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
                  {foldersList.map((folder) => {
                    return (
                      <FolderNames
                        selectFolder={selectFolder}
                        setSelectFolder={setSelectFolder}
                        name={folder.name}
                        key={folder.id}
                        id={folder.id}
                        userId={userId}
                        onClick={handleOnClick}
                      />
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
          <ListTitleArea title={selectFolderName} />
        </ContentsArea>
      )}
      <PopAddFolderButton />
    </>
  );
};

export default FolderPage;
