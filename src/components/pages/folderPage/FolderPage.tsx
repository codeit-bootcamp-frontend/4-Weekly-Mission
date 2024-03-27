import { useEffect, useState } from 'react';
import { getUser, getFolderList, getFolder } from '../../../utils/api';
import folderStyles from './FolderPage.module.css';
import Footer from '../../common/footer/Footer';
import NavBar from '../../common/navBar/NavBar';
import { AddLink } from '../../common/addLink/AddLink';
import SearchBar from '../../common/searchBar/SearchBar';
import { Cardlist } from '../../common/cardlist/Cardlist';
import ModalPortal from '../../../utils/ModalPortal';
import { DeleteFolder } from '../../common/modal/DeleteFolder';
import { EditFolder } from '../../common/modal/Edit';

function FolderPage() {
  const [userData, setUserData] = useState({});
  const [folderListData, setFolderListData] = useState([]);
  const [folderData, setFolderData] = useState([]);
  const [activeButton, setActiveButton] = useState({ id: 0, name: '전체' });
  const [deleteFolderModal, setDeleteFolderModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const getUserData = async () => {
    const responseUser = await getUser();
    setUserData(responseUser.data[0]);
  };
  const getFolderListData = async () => {
    const responseFolderList = await getFolderList();
    setFolderListData(responseFolderList.data);
  };
  const getFolderData = async (id = 0) => {
    const responseFolder = await getFolder(id);
    setFolderData(responseFolder.data);
  };

  useEffect(() => {
    getUserData();
    getFolderData();
    getFolderListData();
  }, []);

  const handleClick = (id, name) => {
    setActiveButton({ id: id, name: name });
    getFolderData(id);
  };
  const handleClickDelete = () => {
    setDeleteFolderModal(!deleteFolderModal);
  };
  const handleClickEdit = () => {
    setEditModal(!editModal);
  };

  return (
    <div>
      <NavBar user={userData} />
      <AddLink />
      <div className={folderStyles.contents}>
        <SearchBar />
        {folderListData.length > 0 ? (
          <div className={folderStyles.background}>
            <div className={folderStyles.topContents}>
              <div className={folderStyles.sort}>
                <button
                  key="전체"
                  onClick={() => handleClick(0, '전체')}
                  className={`${folderStyles.sortButton} ${
                    activeButton.name === '전체' ? folderStyles.active : ''
                  }`}
                >
                  전체
                </button>
                {folderListData &&
                  folderListData.map((folder) => {
                    return (
                      <button
                        key={folder.name}
                        onClick={() => handleClick(folder.id, folder.name)}
                        className={`${folderStyles.sortButton} ${
                          activeButton.name === folder.name
                            ? folderStyles.active
                            : ''
                        }`}
                      >
                        {folder.name}
                      </button>
                    );
                  })}
              </div>
              <button className={folderStyles.add}></button>
            </div>
            <div className={folderStyles.bottomContents}>
              <span className={folderStyles.sortTitle}>
                {activeButton.name}
              </span>
              <div
                className={`${folderStyles.options} ${
                  activeButton.name === '전체' ? folderStyles.all : ''
                }`}
              >
                <button className={folderStyles.share} />
                <button
                  className={folderStyles.edit}
                  onClick={handleClickEdit}
                />
                <button
                  className={folderStyles.delete}
                  onClick={handleClickDelete}
                />
              </div>
            </div>
            <Cardlist links={folderData} />
          </div>
        ) : (
          <div className={folderStyles.nothing}>저장된 링크가 없습니다</div>
        )}
      </div>
      {deleteFolderModal && (
        <ModalPortal>
          {
            <DeleteFolder
              folderName={activeButton.name}
              onClickOutside={handleClickDelete}
            />
          }
        </ModalPortal>
      )}
      {editModal && (
        <ModalPortal>
          {
            <EditFolder
              folderName={activeButton.name}
              onClickOutside={handleClickEdit}
            />
          }
        </ModalPortal>
      )}
      <Footer />
    </div>
  );
}

export default FolderPage;
