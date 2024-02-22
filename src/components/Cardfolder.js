import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../css/Card.css';
import ErrorImage from '../image/noimg.png';
import StarIcon from '../image/star.svg';
import Kebab from '../image/kebab.svg';
import setTime from '../utils/setTime';
import { getFolderList } from '../api';
import Delete from '../modals/Delete';

function Cardfolder({ selectedFolder, dataInfo }) {
  const [menuVisible, setMenuVisible] = useState({});
  const [items, setItems] = useState([]);
  const [dataNull, setDataNull] = useState(true);
  const [selectedItemDelete, setSelectedItemDelete] = useState(null);
  const clickKebab = (event, id) => {
    event.preventDefault();
    setMenuVisible((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  useEffect(() => {
    async function getFolderData() {
      const result = await getFolderList(selectedFolder.id);
      if (result.data.length === 0) {
        setDataNull(true);
        dataInfo(true);
      } else {
        setDataNull(false);
        dataInfo(false);
        setItems(result.data || []);
      }
    }
    getFolderData();
  }, [selectedFolder.id, dataInfo]);

  const handleOpenDelete = (event, item) => {
    event.preventDefault();
    setMenuVisible((prev) => ({
      ...prev,
      [item.id]: !prev[item.id],
    }));
    setSelectedItemDelete(item);
  };
  const handleCloseDelete = () => {
    setSelectedItemDelete(null);
  };
  return dataNull ? (
    <span className="errorInfo">저장된 링크가 없습니다.</span>
  ) : (
    items.map((item) => (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="card" key={item.id}>
        <div className="imgSection">
          <img src={item.image_source || ErrorImage} alt={item.title}></img>
          <img src={StarIcon} alt="star" id="starIcon"></img>
        </div>
        <div className="infoSection">
          <img src={Kebab} alt="kebab" id="kebab" onClick={(event) => clickKebab(event, item.id)}></img>
          {menuVisible[item.id] && (
            <div className="menuOptions">
              <p className="folder deleteFolder" onClick={(event) => handleOpenDelete(event, item)}>
                삭제하기
              </p>
              <p className="folder addFolder">폴더에 추가</p>
            </div>
          )}
          {selectedItemDelete &&
            ReactDOM.createPortal(
              <Delete
                title="링크 삭제"
                main={selectedItemDelete.url}
                buttonText="삭제하기"
                onClose={handleCloseDelete}
              />,
              document.getElementById('modal-root')
            )}
          <span className="time">{setTime(item.created_at)}</span>
          <span className="info">{item.title}</span>
          <span className="date">{item.description}</span>
          <span className="timeStamp">{item.created_at.split('T')[0]}</span>
        </div>
      </a>
    ))
  );
}

export default Cardfolder;
