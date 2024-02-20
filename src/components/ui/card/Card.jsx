import useTimeAgo from '../../../hooks/useTimeAgo';
import useConvertDateFormat from './../../../hooks/useConvertDateFormat';
import * as S from './Card.style';
import noImage from '../../../assets/shared/no-image.png';
import kebabIcon from '../../../assets/folder/kebab.svg';
import starIcon from '../../../assets/folder/star.svg';

const Card = ({ link }) => {
  const timeAgo = link.createdAt || link.created_at;
  const imgSrc = link.imageSource || link.image_source;

  return (
    <S.Container>
      <div onClick={() => window.open(link.url)}>
        <div className="image-wrapper">
          {imgSrc ? (
            <img className="folder-img" src={imgSrc} alt={link.title} />
          ) : (
            <img className="folder-img" src={noImage} alt={link.title} />
          )}
          <img className="star-icon" src={starIcon} alt="별 아이콘" />
        </div>
        <div className="text-box">
          {
            <div className="time-ago-box">
              <p className="time-ago">{useTimeAgo(timeAgo)}</p>
              <img src={kebabIcon} alt="케밥 아이콘" />
            </div>
          }
          <p className="desc">{link.description}</p>
          <p className="date">{useConvertDateFormat(timeAgo)}</p>
        </div>
      </div>
    </S.Container>
  );
};

export default Card;
