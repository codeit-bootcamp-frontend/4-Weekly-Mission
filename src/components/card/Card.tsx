import React, { useRef, useState, useEffect } from 'react';
import useConvertDateFormat from '../../hooks/useConvertDateFormat';
import calcTimeAgo from '../../utils/calcTimeAgo';
import * as S from './Card.style';
import NoImage from '../../assets/images/no-image.png';
import KebabIcon from '../../assets/icons/kebab.svg';
import StarIcon from '../../assets/icons/star.svg';

interface Link {
  id: number;
  createdAt: string;
  created_at?: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
  image_source?: string;
}

interface CardProps {
  link: Link;
  openModal: (modalType: string) => void;
  setModalFolderName: React.Dispatch<React.SetStateAction<string>>;
}

const Card: React.FC<CardProps> = ({ link, openModal, setModalFolderName }) => {
  const timeAgo = link.createdAt ?? link.created_at;
  const imgSrc = link.imageSource ?? link.image_source;
  const [popOver, setPopOver] = useState(false);
  const popOverRef = useRef<HTMLDivElement>(null);

  const onKebabButtonHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setPopOver(!popOver);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popOverRef.current && !popOverRef.current.contains(event.target as Node)) {
        setPopOver(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Container>
      <div onClick={() => window.open(link.url)}>
        <div className="image-wrapper">
          {imgSrc ? (
            <img className="folder-img" src={imgSrc} alt={link.title} />
          ) : (
            <img className="folder-img" src={NoImage} alt={link.title} />
          )}
          <img className="star-icon" src={StarIcon} alt="별 아이콘" />
        </div>
        <div className="text-box">
          <div className="time-ago-box" onClick={onKebabButtonHandle}>
            <p className="time-ago">{calcTimeAgo(timeAgo)}</p>
            <div className="kebob-icon" ref={popOverRef}>
              <img src={KebabIcon} alt="케밥 아이콘" />
              <S.PopOver style={{ display: popOver ? 'flex' : 'none' }}>
                <button
                  onClick={() => {
                    openModal('FolderDeleteModal');
                    setModalFolderName(link.url);
                  }}>
                  삭제하기
                </button>
                <button
                  onClick={() => {
                    openModal('AddToFolderModal');
                    setModalFolderName(link.url);
                  }}>
                  폴더에 추가
                </button>
              </S.PopOver>
            </div>
          </div>
          <p className="desc">{link.description}</p>
          <p className="date">{useConvertDateFormat(timeAgo)}</p>
        </div>
      </div>
    </S.Container>
  );
};

export default Card;
