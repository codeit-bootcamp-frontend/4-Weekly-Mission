import noImage from '../../../assets/shared/no-image.png';
import useTimeAgo from '../../../hooks/useTimeAgo';
import useConvertDateFormat from './../../../hooks/useConvertDateFormat';
import * as S from './ContentCard.style';

function ContentCard({ link }) {
  return (
    <S.CardContainer
      onClick={() => {
        window.open(link.url);
      }}
    >
      <div className="image-wrapper">
        {link?.imageSource ? (
          <img className="img" src={link?.imageSource} alt={link.title} />
        ) : (
          <img className="img" src={noImage} alt={link?.title} />
        )}
      </div>
      <div className="text-box">
        <p className="time-ago">{useTimeAgo(link?.createdAt)}</p>
        <p className="desc">{link?.description}</p>
        <p className="date">{useConvertDateFormat(link?.createdAt)}</p>
      </div>
    </S.CardContainer>
  );
}

export default ContentCard;
