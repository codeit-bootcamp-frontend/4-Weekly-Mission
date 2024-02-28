import { useEffect, useState } from 'react';
import { getFolderNameData } from '../apis/api';
import AddIcon from '../assets/Add.svg';
import Styles from '../styles/FolderPage.module.css';
import SubHeader from './SubHeader';
import AddFolderModal from './modals/AddFolder';

const FolderList = () => {
  const [name, setName] = useState([]);
  const [state, setState] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleBtnClick = () => {};

  const fetchFolderName = async () => {
    const res = await getFolderNameData();

    const folderNames = (res) => {
      return res.data.map((i) => i.name);
    };

    setName(folderNames(res));
  };

  useEffect(() => {
    fetchFolderName();
  }, []);

  return (
    <div className={Styles.FolderList}>
      <div className={Styles.FolderGroups}>
        {name.map((i, idx) => {
          return (
            <div
              onClick={handleBtnClick}
              className={Styles.FolderNames}
              key={idx}
            >
              {i}
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={openModal} className={Styles.FolderAddBtn}>
          폴더 추가
          <img className={Styles.AddIcon} src={AddIcon} alt='add icon' />
        </button>
        {isModalOpen && <AddFolderModal closeModal={closeModal} />}
      </div>
      <SubHeader />
    </div>
  );
};

export default FolderList;
