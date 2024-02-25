import { useEffect, useState } from 'react';
import { getUserFolders } from '../../util/api';
import { exitBtnId, modalBackground, modalTypes, totalName } from '../../util/constants';
import FolderSection from './folderPage/FolderSection';
import AddLinkArea from './folderPage/AddLinkArea';
import DeleteFolder from '../common/modal/DeleteFolder';
import Edit from '../common/modal/Edit';
import Share from '../common/modal/Share';
import Add from '../common/modal/Add';
import AddFolder from '../common/modal/AddFolder';
import DeleteLink from '../common/modal/DeleteLink';

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
    <>
      {isActiveModal && activeModal === modalTypes.edit && (
        <Edit handleCloseModal={handleCloseModal} selectedFolder={selectedFolder} />
      )}
      {isActiveModal && activeModal === modalTypes.addFolder && <AddFolder handleCloseModal={handleCloseModal} />}
      {isActiveModal && activeModal === modalTypes.share && (
        <Share currentFolderId={folderId} handleCloseModal={handleCloseModal} selectedFolder={selectedFolder} />
      )}
      {isActiveModal && activeModal === modalTypes.deleteFolder && (
        <DeleteFolder handleCloseModal={handleCloseModal} selectedFolder={selectedFolder} />
      )}
      {isActiveModal && activeModal === modalTypes.deleteLink && (
        <DeleteLink handleCloseModal={handleCloseModal} link={selectedLink} />
      )}
      {isActiveModal && activeModal === modalTypes.add && (
        <Add handleCloseModal={handleCloseModal} link={selectedLink} folders={folders} />
      )}
      <AddLinkArea changeSelectedLink={changeSelectedLink} handleModalBtnClick={handleModalBtnClick} />
      <FolderSection
        folders={folders}
        selectedFolder={selectedFolder}
        folderId={folderId}
        handleCurrentFolder={handleCurrentFolder}
        handleModalBtnClick={handleModalBtnClick}
        changeSelectedLink={changeSelectedLink}
      />
    </>
  );
};
export default FolderPage;
