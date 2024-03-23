import { useState, useEffect, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import '../../css/Card.css';
import ErrorImage from '../../image/noimg.png';
import StarIcon from '../../image/star.svg';
import Kebab from '../../image/kebab.svg';
import { setTime } from '../../utils/setTime';
import { getFolderList, getFolderType } from '../../api';
import Delete from '../../modals/Delete';
import Add from '../../modals/Add';
import { modalRoot } from '../../consts/const';
import { Folder, Item1 } from '../../consts/type';

interface CardClick {
  [key: number]: boolean;
}

interface Props {
  selectedFolder: Folder;
  dataInfo: (isDataNull: boolean) => void;
  inputValue: string;
}

function Cardfolder({ selectedFolder, dataInfo, inputValue }: Props) {
  const [handleVisibleMenu, setVisibleMenu] = useState<CardClick>({});
  const [items, setItems] = useState<Item1[]>([]);
  const [inputItems, setInputItems] = useState<Item1[]>(items);
  const [dataNull, setDataNull] = useState<boolean>(true);
  const [selectedItemDelete, setSelectedItemDelete] = useState<any>(null);
  const [folderListData, setFolderListData] = useState<Folder[]>([]);
  const [addFolderSelected, setAddFolderSelected] = useState(false);

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
    async function getFolderListData() {
      const result = await getFolderType();
      const updateData = [...result.data];
      setFolderListData(updateData);
    }
    getFolderData();
    getFolderListData();
  }, [selectedFolder.id, dataInfo]);

  useEffect(() => {
    const filteredItems = items.filter((item) => {
      return (
        item.title?.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.description?.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.url?.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    setInputItems(filteredItems);
  }, [items, inputValue]);

  const clickKebab = (event: MouseEvent, id: number) => {
    event.preventDefault();
    setVisibleMenu((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const folderList = folderListData.map((item) => ({
    id: item.id,
    name: item.name,
    count: item.link.count,
  }));

  const handleAddFolderClick = (event: MouseEvent, item: Item1) => {
    event.preventDefault();
    setVisibleMenu((prev) => ({
      ...prev,
      [item.id]: !prev[item.id],
    }));
    setAddFolderSelected(true);
  };
  const handleCloseClick = () => {
    setAddFolderSelected(false);
  };

  const handleOpenDelete = (event: MouseEvent, item: Item1) => {
    event.preventDefault();
    setVisibleMenu((prev) => ({
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
    <>
      {inputItems.map((item) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="card" key={item.id}>
          <div className="imgSection">
            <img src={item.image_source || ErrorImage} alt={item.title}></img>
            <img src={StarIcon} alt="star" id="starIcon"></img>
          </div>
          <div className="infoSection">
            <img src={Kebab} alt="kebab" id="kebab" onClick={(event) => clickKebab(event, item.id)}></img>
            {handleVisibleMenu[item.id] && (
              <div className="menuOptions">
                <p className="folder deleteFolder" onClick={(event) => handleOpenDelete(event, item)}>
                  삭제하기
                </p>
                <p className="folder addFolder" onClick={(event) => handleAddFolderClick(event, item)}>
                  폴더에 추가
                </p>
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
                modalRoot
              )}
            {addFolderSelected &&
              ReactDOM.createPortal(<Add data={folderList} onClose={handleCloseClick} />, modalRoot)}
            <span className="time">{setTime(item.created_at)}</span>
            <span className="info">{item.title}</span>
            <span className="date">{item.description}</span>
            <span className="timeStamp">{item.created_at.split('T')[0]}</span>
          </div>
        </a>
      ))}
    </>
  );
}

export default Cardfolder;
