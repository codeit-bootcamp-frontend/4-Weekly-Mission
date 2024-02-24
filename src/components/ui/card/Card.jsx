import { useState } from 'react';
import useConvertDateFormat from './../../../hooks/useConvertDateFormat';
import calcTimeAgo from '../../../utils/calcTimeAgo';
import * as S from './Card.style';
import NoImage from '../../../assets/shared/no-image.png';
import KebabIcon from '../../../assets/folder/kebab.svg';
import StarIcon from '../../../assets/folder/star.svg';

const Card = ({ link }) => {
  const timeAgo = link.createdAt ?? link.created_at;
  const imgSrc = link.imageSource ?? link.image_source;
  const [popOver, setPopOver] = useState(false);
  const onKebabButtonHandle = (e) => {
    e.stopPropagation();
    setPopOver(!popOver);
  };
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
            <div className="kebob-icon">
              <img src={KebabIcon} alt="케밥 아이콘" />
              <S.PopOver style={{ display: popOver ? 'flex' : 'none' }}>
                <button>삭제하기</button>
                <button>폴더에 추가</button>
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
