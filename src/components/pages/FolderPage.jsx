import { useEffect, useState } from 'react';
import { getUserFolders } from '../../util/api';
import { exitBtnId, modalBackground, modalTypes, totalName } from '../../util/constants';
import FolderSection from './folderPage/FolderSection';
import AddLinkArea from './folderPage/AddLinkArea';
import { FoldersContext } from '../context/foldersContext';

const FolderPage = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(totalName);
  const [folderId, setFolderId] = useState(0);
  const [selectedLink, setSelectedLink] = useState('');
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [activeModal, setActiveModal] = useState('');

  const handleCurrentFolder = (id, name) => {
    setFolderId(id);
    setSelectedFolder(name);
  };

  const changeSelectedLink = link => {
    setSelectedLink(link);
  };

  const handleModalBtnClick = e => {
    e.preventDefault();
    setIsActiveModal(true);
    setActiveModal(e.target.dataset.modal);
  };

  const handleCloseModal = e => {
    e.preventDefault();
    if (!(e.target.id === modalBackground || e.target.id === exitBtnId)) return;
    setSelectedLink('');
    setIsActiveModal(false);
    setActiveModal('');
  };

  const handleFolderLoad = async () => {
    try {
      const { data } = await getUserFolders();
      setFolders(data);
    } catch {
      setFolders([]);
    }
  };

  useEffect(() => {
    handleFolderLoad();
  }, []);

  return (
    <FoldersContext.Provider value={folders}>
    </FoldersContext.Provider>
  );
};
export default FolderPage;
