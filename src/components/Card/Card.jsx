import dayjs from 'dayjs';
import * as S from './Card.styles';
import { UNDEFINED_IMAGE } from '../../constatns/constant';

const Card = ({ createdAt, url, title, imageURL }) => {
  const createdDay = dayjs(createdAt).format('YYYY-MM-DD');
  return (
    <S.CardArticle>
      <a href={url} target='_blank' rel='noreferrer noopener'>
        <S.CardImageBox>
          <S.CardImage src={imageURL || UNDEFINED_IMAGE} alt={title} />
        </S.CardImageBox>
        <S.CardStarIcon />
        <S.CardTextBox>
          <S.CardTimeBox>
            <S.CardReactTimeAgo date={createdAt} locale='ko' />
            <S.CardDotIcon />
          </S.CardTimeBox>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDate> {createdDay} </S.CardDate>
        </S.CardTextBox>
      </a>
    </S.CardArticle>
  );
};

export default Card;
