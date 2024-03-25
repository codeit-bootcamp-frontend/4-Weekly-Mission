import React, { useState, useEffect } from 'react';
import './FilterBar.css';
import useGetLink from '../apis/useGetLink';
import Card from '../Card/Card';
import { DEFAULT_FOLDER } from '../../utils/constant';
import { axiosInstance } from '../../utils/axiosInstance';
import DeleteFolderModal from '../Modals/DeleteFolderModal';
import EditNameModal from '../Modals/EditNameModal';
import ShareModal from '../Modals/ShareModal';
import AddFolderModal from '../Modals/AddFolderModal';
import type { Link } from '../apis/useGetLink';

const mapFormatDate: (data: Link[]) => { name: string | number; id: string | number }[] = data => {
  const formattedFolder = data.map(({ name, id }) => ({ name, id }));
  return [DEFAULT_FOLDER, ...formattedFolder];
};

export default function FilterBar() {
  const [folderId, setFolderId] = useState(DEFAULT_FOLDER.id);
  const [folderData, setFolderData] = useState<
    {
      id: string | number;
      name: string | number;
    }[]
  >([]);
  const [folderName, setFolderName] = useState(DEFAULT_FOLDER.name);
  const { loading, error, data: linksData } = useGetLink(folderId);

  const [deleteFolderModalOpen, setDeleteFolderModalOpen] = useState(false);
  const [editNameModalOpen, setEditNameModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [addFolderModalOpen, setAddFolderModalOpen] = useState(false);

  const handleClose = () => {
    setDeleteFolderModalOpen(false);
    setEditNameModalOpen(false);
    setShareModalOpen(false);
    setAddFolderModalOpen(false);
  };

  const handleChange = (id: string, name: string) => {
    setFolderId(id);
    setFolderName(name);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axiosInstance.get('users/4/folders');
        setFolderData(mapFormatDate(data.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="filterBarArea">
        <div className="floatingButton">
          폴더 추가 <img src={`${process.env.PUBLIC_URL}/images/addWhite.svg`} alt="추가 아이콘"></img>
        </div>
        {addFolderModalOpen && <AddFolderModal onClose={handleClose} />}
        <div className="filterBar">
          <div className="filterBarLeft">
            {folderData.map(({ id, name }) => (
              <button
                key={id}
                className={`filterBarButton ${folderId == id ? 'selected' : ''}`}
                type="button"
                value={id}
                onClick={() => {
                  handleChange(String(id), String(name));
                }}>
                {name}
              </button>
            ))}
          </div>
          <div className="filterBarRight">
            <div className="addButton" onClick={() => setAddFolderModalOpen(true)}>
              폴더 추가 <img src={`${process.env.PUBLIC_URL}/images/add.svg`} alt="추가 아이콘"></img>
            </div>
            {addFolderModalOpen && <AddFolderModal onClose={handleClose} />}
          </div>
        </div>
        <div className="nameBar">
          <div className="folderName">{folderName}</div>
          {folderName !== DEFAULT_FOLDER.name ? (
            <div className="modalButtons">
              <div className="modalButton" onClick={() => setShareModalOpen(true)}>
                <img src={`${process.env.PUBLIC_URL}/images/share.svg`} alt="공유 아이콘"></img>
                <span>공유</span>
              </div>
              {shareModalOpen && <ShareModal onClose={handleClose} />}
              <div className="modalButton" onClick={() => setEditNameModalOpen(true)}>
                <img src={`${process.env.PUBLIC_URL}/images/pen.svg`} alt="연필 아이콘"></img>
                <span>이름 변경</span>
              </div>
              {editNameModalOpen && <EditNameModal onClose={handleClose} />}
              <div className="modalButton" onClick={() => setDeleteFolderModalOpen(true)}>
                <img src={`${process.env.PUBLIC_URL}/images/trashbin.svg`} alt="휴지통 아이콘"></img>
                <span>삭제</span>
              </div>
              {deleteFolderModalOpen && <DeleteFolderModal onClose={handleClose} />}
            </div>
          ) : null}
        </div>
        <div className={!linksData.length ? '' : 'cardStyle'}>
          {!loading ? <Card data={linksData} /> : <div>Loading...</div>}
        </div>
      </div>
    </>
  );
}
