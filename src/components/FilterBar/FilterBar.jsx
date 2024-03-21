import { React, useState, useEffect } from 'react';
import './FilterBar.css';
import useGetLink from '../apis/useGetLink';
import Card from '../Card/Card';
import { DEFAULT_FOLDER } from '../../utils/constant';
import { axiosInstance } from '../../utils/axiosInstance';

const mapFormatDate = data => {
  const formattedFolder = data.map(({ name, id }) => ({ name, id }));
  return [DEFAULT_FOLDER, ...formattedFolder];
};

export default function FilterBar() {
  const [folderId, setFolderId] = useState(DEFAULT_FOLDER.id);
  const [folderData, setFolderData] = useState([]);
  const [folderName, setFolderName] = useState(DEFAULT_FOLDER.name);
  const { loading, error, data: linksData } = useGetLink(folderId);

  const handleChange = (id, name) => {
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
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="filterBarArea">
      <div className="floatingButton">
        폴더 추가 <img src={`${process.env.PUBLIC_URL}/images/addWhite.svg`} alt="추가 아이콘"></img>
      </div>
      <div className="filterBar">
        <div className="filterBarLeft">
          {folderData.map(({ id, name }) => (
            <button
              key={id}
              className={`filterBarButton ${folderId == id ? 'selected' : ''}`}
              type="button"
              value={id}
              onClick={() => {
                handleChange(id, name);
              }}>
              {name}
            </button>
          ))}
        </div>
        <div className="filterBarRight">
          <div className="addButton">
            폴더 추가 <img src={`${process.env.PUBLIC_URL}/images/add.svg`} alt="추가 아이콘"></img>
          </div>
        </div>
      </div>
      <div className="nameBar">
        <div className="folderName">{folderName}</div>
        {folderName !== DEFAULT_FOLDER.name ? (
          <div className="modalButtons">
            <div className="modalButton">
              <img src={`${process.env.PUBLIC_URL}/images/share.svg`} alt="공유 아이콘"></img>
              <span>공유</span>
            </div>
            <div className="modalButton">
              <img src={`${process.env.PUBLIC_URL}/images/pen.svg`} alt="연필 아이콘"></img>
              <span>이름 변경</span>
            </div>
            <div className="modalButton">
              <img src={`${process.env.PUBLIC_URL}/images/trashbin.svg`} alt="휴지통 아이콘"></img>
              <span>삭제</span>
            </div>
          </div>
        ) : null}
      </div>
      <div className={!linksData.length ? '' : 'cardStyle'}>
        {!loading ? <Card data={linksData} /> : <div>Loading...</div>}
      </div>
    </div>
  );
}
