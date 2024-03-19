import {
  CardContentWrapper,
  CardDate,
  CardImage,
  CardStatus,
  CardTitle,
  Wrapper,
} from './Card.style';

interface cardData {
  id: number | undefined;
  createdAt: string | undefined;
  url: string | undefined;
  title: string | undefined;
  description: string | undefined;
  imageSource: string | undefined;
}

interface Props {
  card: null | cardData;
}

const Card = ({ card }: Props) => {
  console.log(card?.imageSource);
  return (
    <Wrapper>
      <CardImage
        src={card?.imageSource ? card?.imageSource : '/images/hollowImage.png'}
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
};

export default Card;
