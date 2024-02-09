import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

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
    font-size: 1.6rem;
    line-height: 2.4rem;
  `,
};

// api 연결하고 mock data 삭제
const mockData = {
  createdAt: '2023-03-05T08:11:20Z',
  url: 'https://www.codeit.kr',
  imageSource: 'https://sprint.codeit.kr/static/images/sprint-admissions/og_img.png',
  description: 'Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat',
};

function Card() {
  return (
    <Styled.Container>
      <Link to={mockData.url} target="_blank" rel="noopener noreferrer">
        <StarButton
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 3,
          }}
        />
        <Styled.ThumbnailContainer>
          <Styled.ThumbnailImg src={mockData.imageSource} alt="카드 이미지" />
        </Styled.ThumbnailContainer>
        <Styled.TextCardInfo>
          <TimeFormat createdAt={mockData.createdAt} />
          <Styled.Text>{mockData.description}</Styled.Text>
          <DateFormat createdAt={mockData.createdAt} />
        </Styled.TextCardInfo>
      </Link>
    </Styled.Container>
  );
}

export default Card;
