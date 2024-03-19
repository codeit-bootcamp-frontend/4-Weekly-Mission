import {
  CardContentWrapper,
  CardDate,
  CardImage,
  CardStatus,
  CardTitle,
  Wrapper,
} from './Card.style';

const Card = () => (
  <Wrapper>
    <CardImage
      src="/images/hollowImage.png"
      alt="이미지"
      width={340}
      height={200}
    />
    <CardContentWrapper>
      <CardStatus>10 minutes ago</CardStatus>
      <CardTitle>testestset</CardTitle>
      <CardDate>2023.3.15</CardDate>
    </CardContentWrapper>
  </Wrapper>
);

export default Card;
