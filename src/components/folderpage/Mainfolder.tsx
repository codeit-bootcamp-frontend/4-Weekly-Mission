import { useEffect, useState } from 'react';
import Cardfolder from './Cardfolder';
import FolderList from './FolderList';
import '../../css/main.css';
import { getFolderType } from '../../api';
import searchIcon from '../../image/Search.svg';
import closeIcon from '../../image/close.svg';

interface Folder {
  id: number | null;
  name: string;
  link: {
    count?: number;
  };
}

function Mainfolder() {
  const [data, setData] = useState<Folder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<Folder>({
    id: null,
    name: '',
    link: {},
  });
  const [dataNull, setDataNull] = useState(true);
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    async function getFolderData() {
      const result = await getFolderType();
      const updateData: Folder[] = [{ id: null, name: '전체', link: {} }, ...result.data];
      setData(updateData);
    }
    getFolderData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };
  const handleInputClear = () => {
    setInputData('');
  };
  const closeIconStyle = inputData ? {} : { display: 'none' };

  const folderList = data.map((item) => ({
    id: item.id,
    name: item.name,
    count: item.link.count,
  }));

  const onFolderSelect = (id: number | null) => {
    const folder = folderList.find((folder) => folder.id === id);
    if (folder) {
      const updatedFolder: Folder = {
        ...folder,
        link: {
          count: folder.count,
        },
      };
      setSelectedFolder(updatedFolder);
    }
  };

  const handleDataNullUpdate = (isDataNull: boolean) => {
    setDataNull(isDataNull);
  };
  return (
    <div className="mainContainer">
      <div className="mainframe">
        <div className="searchbar">
          <input id="searchtopic" value={inputData} onChange={handleInputChange} placeholder="링크를 검색해 보세요" />
          <img src={searchIcon} id="searchIcon" alt="searchIcon" />
          <img src={closeIcon} onClick={handleInputClear} style={closeIconStyle} id="closeIcon" alt="closeIcon" />
        </div>
      </div>
      <div className="listFrame">
        <FolderList folderListData={folderList} onFolderSelect={onFolderSelect} selectedFolder={selectedFolder} />
      </div>
      <div className={dataNull ? 'nullContent' : 'gridframe'}>
        <Cardfolder selectedFolder={selectedFolder} inputValue={inputData} dataInfo={handleDataNullUpdate}></Cardfolder>
      </div>
    </div>
  );
}

export default Mainfolder;
