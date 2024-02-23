import Cardfolder from './Cardfolder';
import FolderList from './FolderList';
import '../css/main.css';
import { getFolderType } from '../api';
import searchIcon from '../image/Search.svg';
import { useEffect, useState } from 'react';

function Mainfolder() {
  const [data, setData] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState({ id: null, name: '', link: {} });
  const [dataNull, setDataNull] = useState(true);
  useEffect(() => {
    async function getFolderData() {
      const result = await getFolderType();
      const updateData = [{ id: null, name: '전체', link: {} }, ...result.data];
      setData(updateData);
    }
    getFolderData();
  }, []);
  const folderList = data.map((item) => ({
    id: item.id,
    name: item.name,
    count: item.link.count,
  }));

  const onFolderSelect = (id) => {
    const folder = folderList.find((folder) => folder.id === id);
    setSelectedFolder(folder);
  };

  const handleDataNullUpdate = (isDataNull) => {
    setDataNull(isDataNull);
  };
  return (
    <div className="mainContainer">
      <div className="mainframe">
        <div className="searchbar">
          <input id="searchtopic" placeholder="링크를 검색해 보세요"></input>
          <img src={searchIcon} id="searchIcon" alt="searchIcon"></img>
        </div>
      </div>
      <div className="listFrame">
        <FolderList folderListData={folderList} onFolderSelect={onFolderSelect} selectedFolder={selectedFolder} />
      </div>
      <div className={dataNull ? 'nullContent' : 'gridframe'}>
        <Cardfolder selectedFolder={selectedFolder} dataInfo={handleDataNullUpdate}></Cardfolder>
      </div>
    </div>
  );
}

export default Mainfolder;
