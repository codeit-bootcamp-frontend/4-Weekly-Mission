import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import defaultCardImg from 'assets/defaultCardImg.svg';
import StarButton from 'components/common/card/StarButton';
import TimeFormat from 'components/common/card/TimeFormat';
import DateFormat from 'components/common/card/DateFormat';

const Styled = {
  Container: styled.div`
    width: 34rem; // 모바일에서 변경
    height: 33.4rem;
    position: relative;
    background: ${({ theme }) => theme.color.white};
    border-radius: 1.5rem;
    box-shadow: 0 0.5rem 0.4rem 0 #00000029;
    overflow: hidden;
    cursor: pointer;
  `,

  ThumbnailContainer: styled.div`
    width: 100%;
    height: 20rem;
    border-radius: 1.5rem 1.5rem 0 0;
    overflow: hidden;
  `,

  ThumbnailImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      transform: scale(1.3);
      transition-duration: 0.5s;
    }
  `,

  TextCardInfo: styled.div`
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  Text: styled.div`
    width: 100%;
    height: 5rem;
    font-size: 1.6rem;
    line-height: 2.4rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
};

function Card({ createdAt, url, description, imageSource = defaultCardImg }) {
  return (
    <Styled.Container>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <StarButton
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 3,
          }}
        />
        <Styled.ThumbnailContainer>
          <Styled.ThumbnailImg src={imageSource} alt="카드 이미지" />
        </Styled.ThumbnailContainer>
        <Styled.TextCardInfo>
          <TimeFormat createdAt={createdAt} />
          <Styled.Text>{description}</Styled.Text>
          <DateFormat createdAt={createdAt} />
        </Styled.TextCardInfo>
      </Link>
    </Styled.Container>
  );
}

export default Card;
