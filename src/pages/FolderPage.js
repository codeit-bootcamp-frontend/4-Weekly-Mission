import { useEffect, useState } from 'react';
import SearchTopBodyArea from '../components/area/SearchTopBodyArea';
import ContentsArea from '../components/area/ContentsArea';
import PopAddFolderButton from '../components/common/PopAddFolderButton';
import ListTitleArea from '../components/area/ListTitleArea';
import FolderName from '../components/FolderName';
import ModalPortal from '../components/modal/ModalPortal';
import InputBox from '../components/common/InputBox';
import addIcon from '../assets/purple_add.svg';
import { getApi } from '../utils/apis';

const FolderPage = () => {
  const [folderList, setFolderList] = useState([]);
  const [linkList, setLinkList] = useState({});
  const [selectFolderName, setSelectFolderName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // TODO: 데이터 받아온 뒤 수정 예정
  const userId = '4';

  const addFolderModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLoad = async () => {
    const { data } = await getApi(`/users/${userId}/links`);
    const folders = await getApi(`/users/${userId}/folders`);

    setFolderList([{ name: '전체', id: 'all' }, ...folders.data]);
    setLinkList({ links: [...data] });
  };

  useEffect(() => {
    handleLoad();
    setSelectFolderName('전체');
  }, []);

  const handleOnClick = async (folderName, list = []) => {
    setSelectFolderName(folderName);
    setLinkList({ links: [...list] });
  };

  // TODO: 폴더저장 api 연결 필요
  const addFolder = () => {
    return '임시 폴더 저장';
  };

  return (
    <>
      <SearchTopBodyArea folderListData={folderList} />
      {linkList.links && (
        <ContentsArea links={linkList.links}>
          {folderList.length > 0 && (
            <div className="folder_button_area">
              <div className="folder_buttons_area">
                {folderList.map((folder) => {
                  return (
                    <FolderName
                      selectFolderName={selectFolderName}
                      setSelectFolderName={setSelectFolderName}
                      name={folder.name}
                      key={folder.id}
                      id={folder.id}
                      userId={userId}
                      onClick={handleOnClick}
                    />
                  );
                })}
              </div>
              <div className="add_folder_text_area" onClick={addFolderModal}>
                <p className="add_folder_text">폴더추가</p>
                <img src={addIcon} alt="add" />
                {isModalOpen && (
                  <ModalPortal
                    onClick={addFolderModal}
                    modalTitle="폴더 추가"
                    buttonClass="button modal_button back_gra_purpleblue"
                    buttonText="추가"
                    modalButtonFunc={addFolder}
                  >
                    <InputBox type="text" placeholder="내용 입력" />
                  </ModalPortal>
                )}
              </div>
            </div>
          )}
          <ListTitleArea title={selectFolderName} />
        </ContentsArea>
      )}
      <PopAddFolderButton />
    </>
  );
};

export default FolderPage;
