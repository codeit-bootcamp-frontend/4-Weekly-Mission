import React, { useEffect, useState } from 'react';
import { calculateTimePassed, formatDate } from '../../utils/dateUtils';
import ActionContainer from './buttons/ActionContainer';
import '../../style/folderContent.css';
import FolderCategoryButtons from './buttons/FolderCategoryButtons';
import LinkCards from './LinkCards';
import useModal from '../../hooks/useModal';
import Modal from './Modal';

export interface Folder {
  id: string;
  name: string;
}

export interface Link {
  id: string;
  title: string;
  url: string;
  created_at: Date;
}
interface FolderLinksProps {
  folders: Folder[];
  links: Link[];
  onFolderClick: (folderId: string) => void;
}

const FolderLinks: React.FC<FolderLinksProps> = ({ folders, links, onFolderClick }) => {
  const [modalState, setModalState, onHandleCancel] = useModal();
  const [selectedFolderName, setSelectedFolderName] = useState<string>('전체');
  const excludeFirstLinks = links.slice(1);

  const allLinks = excludeFirstLinks.map((link) => ({
    ...link,
    timePassed: calculateTimePassed(link.created_at),
    formattedDate: formatDate(link.created_at),
  }));

  useEffect(() => {
    onFolderClick('all');
  }, []);

  const handleFolderClick = (folderId: string) => {
    onFolderClick(folderId);
    const folderName =
      folderId === 'all'
        ? '전체'
        : folders.find((folder) => folder.id === folderId)?.name || '폴더없음';

    setSelectedFolderName(folderName);
    onFolderClick(folderId);
  };

  return (
    <div>
      <FolderCategoryButtons
        folders={folders}
        handleFolderClick={handleFolderClick}
        setModalState={setModalState}
      />

      <div className="links-container-box">
        <ActionContainer folderName={selectedFolderName} />

        {links.length === 0 ? (
          <div className="links-container-empty">저장된 링크가 없습니다.</div>
        ) : (
          <div className="links-container">
            <LinkCards allLinks={allLinks} setModalState={setModalState} />
          </div>
        )}
        <Modal values={modalState} onClose={onHandleCancel} folders={folders} />

      </div>
    </div>
  );
};

export default FolderLinks;
