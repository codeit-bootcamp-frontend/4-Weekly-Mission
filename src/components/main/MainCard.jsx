import * as Styled from './MainCard.styled';

function MainCard({ list, index }) {
  return (
    <Styled.Card>
      <Styled.CardTitleBox index={index}>
        <Styled.CardTitle style={list.titleStyle}>
          {list.title[0]}
          <Styled.CardTextEffect>{list.effect}</Styled.CardTextEffect>
          {list.title[1]}
        </Styled.CardTitle>
        <Styled.CardText>{list.text}</Styled.CardText>
      </Styled.CardTitleBox>
      <Styled.CardImgBox>
        <Styled.CardImg src={list.img} alt={`카드 이미지`} />
      </Styled.CardImgBox>
      <Styled.CardMobileText>{list.text}</Styled.CardMobileText>
    </Styled.Card>
  );
}

export default MainCard;
