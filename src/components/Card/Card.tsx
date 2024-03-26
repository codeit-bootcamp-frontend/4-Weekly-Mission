import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { getElapsedTime } from '../../utils/getElapsedTime';
import './Card.css';
import type { Link } from '../apis/useGetLink';

interface CardProps {
  data: Link[];
}

const PopoverMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div id="popoverMenu">
      <div className="popoverDelete">삭제하기</div>
      <div className="popoverAddToFolder">폴더에 추가</div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ data }) => {
  const [cardData, setCardData] = useState<Link[]>([]);
  const [popoverMenuOpen, setPopoverMenuOpen] = useState(false);

  useEffect(() => {
    setCardData(data);
  }, [data]);

  const handleClick = () => {
    setPopoverMenuOpen(true);
  };

  const handleClose = () => {
    setPopoverMenuOpen(false);
  };

  return (
    <>
      {!cardData.length ? (
        <div id="mainDefaultText">저장된 링크가 없습니다.</div>
      ) : (
        cardData.map(link => (
          <div key={link.id} className="card">
            <a href={link.url}>
              <img
                className="cardImage"
                src={
                  link.image_source || link.imageSource ? link.image_source || link.imageSource : '/images/noImage.png'
                }
                alt={link.title}
              />
            </a>
            <div className="cardTextArea">
              <div className="uploadTime">
                <div>{getElapsedTime(link.created_at || link.createdAt)} </div>
                <button type="button" key={link.id} onClick={handleClick}>
                  <img src={`${process.env.PUBLIC_URL}/images/kebab.png`} alt="팝오버 아이콘" />
                </button>
                {popoverMenuOpen && <PopoverMenu onClose={handleClose} />}
              </div>
              <a href={link.url}>
                <div className="cardText">{link.description}</div>
                <div className="uploadDate">{Moment(link.created_at || link.createdAt).format('YYYY.MM.DD')}</div>
              </a>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Card;
