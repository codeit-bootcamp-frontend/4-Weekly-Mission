import dayjs from 'dayjs';
import * as S from './Crad.styles';

const Card = ({ createdAt, url, title, imageURL }) => {
  return (
    <S.CardArticle>
      <a href={url} target='_blank' rel='noreferrer noopener'>
        <S.CardImageBox>
          <S.CardImage src={imageURL || '/undefined-image.svg'} alt={title} />
        </S.CardImageBox>
        <S.CardTextBox>
          <S.CardReactTimeAgo date={createdAt} locale='ko' />
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDate> {dayjs(createdAt).format('YYYY-MM-DD')} </S.CardDate>
        </S.CardTextBox>
      </a>
    </S.CardArticle>
  );
};

export default Card;
