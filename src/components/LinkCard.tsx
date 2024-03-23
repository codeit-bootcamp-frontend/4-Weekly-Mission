import { useState, useEffect, MouseEvent } from 'react';
import { dateParse, diffDate } from '../utils/date';
import noImg from '../assets/no-image-link.png';
import starDefault from '../assets/star-Default.svg';
import kebabImg from '../assets/kebab.svg';
import style from '../styles/LinkCard.module.css';
import { folderList } from '@/types/folderDataType.type';

interface dataProp {
  title: string;
  url: string;
  createdAt: string;
  created_at: string;
  imageSource: string;
  image_source: string;
}
interface linkCard {
  data: dataProp;
  openModal: (type: string, data?: folderList[] | dataProp) => void;
}
function LinkCard({ data, openModal }: linkCard) {
  const [popOver, setPopOver] = useState(false);

  const handleKebabClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setPopOver((prevData) => !prevData);
  };

  useEffect(() => {
    setPopOver(false);
    document.addEventListener('click', () => {
      setPopOver(false);
    });
    return () => {
      document.removeEventListener('click', () => {
        setPopOver(false);
      });
    };
  }, []);
  return (
    <>
      <div className={style.linkGridItem}>
        <div className={style.itemImg}>
          <img src={data?.imageSource || data?.image_source ? data?.imageSource || data?.image_source : noImg} alt="no-img" />
        </div>
        <div className={style.itemInfo}>
          <div className={style.flexBox}>
            <div className={style.dateDiff}>{diffDate(dateParse(data?.createdAt || data?.created_at))}</div>
            <div className={style.kebabBox} onClick={handleKebabClick}>
              <img src={kebabImg} alt="kebab" />
              {popOver && (
                <div className={style.popOver}>
                  <ul>
                    <li onClick={() => openModal('LinkDelete', data)}>
                      <div>삭제하기</div>
                    </li>
                    <li onClick={() => openModal('LinkAdd')}>
                      <div>폴더에 추가</div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <a href={data?.url} target="_blank" rel="noreferrer">
            <div className={style.itemContext}>{data?.title}</div>
          </a>
          <div className={style.itemDate}>{dateParse(data?.createdAt || data?.created_at)}</div>
        </div>

        {/* svg조작으로 색상변경할 예정 */}
        <img className={style.starBtn} src={starDefault} alt="star" />
      </div>
    </>
  );
}

export default LinkCard;
