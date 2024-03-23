import Card from './Card';

import '../../css/main.css';
import { getFolder } from '../../api';
import searchIcon from '../../image/Search.svg';
import closeIcon from '../../image/close.svg';
import { useEffect, useState } from 'react';
import { Item2 } from '../../consts/type';

function Main() {
  const [data, setData] = useState<Item2[]>([]);
  const [inputData, setInputData] = useState('');
  useEffect(() => {
    async function getFolderData() {
      const result = await getFolder();
      const { folder } = result;
      setData(folder.links);
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
  return (
    <div className="mainContainer">
      <div className="mainframe">
        <div className="searchbar">
          <input id="searchtopic" value={inputData} onChange={handleInputChange} placeholder="링크를 검색해 보세요" />
          <img src={searchIcon} id="searchIcon" alt="searchIcon" />
          <img src={closeIcon} onClick={handleInputClear} style={closeIconStyle} id="closeIcon" alt="closeIcon" />
        </div>
      </div>
      <div className="gridframe">
        <Card items={data} inputValue={inputData} />
      </div>
    </div>
  );
}

export default Main;
