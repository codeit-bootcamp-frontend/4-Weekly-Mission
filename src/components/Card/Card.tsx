import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { getElapsedTime } from '../../utils/getElapsedTime';
import './Card.css';
import type { LinkData } from '../apis/useGetLink';
import { Link } from 'react-router-dom';

interface Props {
  data: LinkData[];
}

const PopoverMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div id="popoverMenu">
      <div className="popoverDelete">삭제하기</div>
      <div className="popoverAddToFolder">폴더에 추가</div>
    </div>
  );
};

const Card: React.FC<Props> = ({ data }) => {
  const [popoverMenuOpen, setPopoverMenuOpen] = useState(false);

  const handleOpenPopoverMenu = () => {
    setPopoverMenuOpen(true);
  };

  const handleClosePopoverMenu = () => {
    setPopoverMenuOpen(false);
  };

  return (
    <>
      {!data.length ? (
        <div id="mainDefaultText">저장된 링크가 없습니다.</div>
      ) : (
        data.map(link => (
          <div key={link.id} className="card">
            <Link to={link.url}>
              <img
                className="cardImage"
                src={
                  link.image_source || link.imageSource ? link.image_source || link.imageSource : '/images/noImage.png'
                }
                alt={link.title}
              />
            </Link>
            <div className="cardTextArea">
              <div className="uploadTime">
                <div>{getElapsedTime(link.created_at || link.createdAt)} </div>
                <button type="button" key={link.id} onClick={handleOpenPopoverMenu}>
                  <img src={`${process.env.PUBLIC_URL}/images/kebab.png`} alt="팝오버 아이콘" />
                </button>
                {popoverMenuOpen && <PopoverMenu onClose={handleClosePopoverMenu} />}
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
