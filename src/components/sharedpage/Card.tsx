import { MouseEvent, useState, useEffect } from 'react';
import '../../css/Card.css';
import ErrorImage from '../../image/noimg.png';
import StarIcon from '../../image/star.svg';
import Kebab from '../../image/kebab.svg';
import { setTime } from '../../utils/setTime';
import { Item2 } from '../../consts/type';
interface CardClick {
  [key: number]: boolean;
}

interface Props {
  items: Item2[];
  inputValue: string;
}

function Card({ items, inputValue }: Props) {
  const [handleVisibleMenu, setVisibleMenu] = useState<CardClick>({});
  const [inputItems, setInputItems] = useState<Item2[]>(items);

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

  return (
    <>
      {inputItems.map((item) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="card" key={item.id}>
          <div className="imgSection">
            <img src={item.imageSource || ErrorImage} alt={item.title}></img>
            <img src={StarIcon} alt="star" id="starIcon"></img>
          </div>
          <div className="infoSection">
            <img src={Kebab} alt="kebab" id="kebab" onClick={(event) => clickKebab(event, item.id)}></img>
            {handleVisibleMenu[item.id] && (
              <div className="menuOptions">
                <p className="folder deleteFolder">삭제하기</p>
                <p className="folder addFolder">폴더에 추가</p>
              </div>
            )}
            <span className="time">{setTime(item.createdAt)}</span>
            <span className="info">{item.title}</span>
            <span className="date">{item.description}</span>
          </div>
        </a>
      ))}
    </>
  );
}

export default Card;
