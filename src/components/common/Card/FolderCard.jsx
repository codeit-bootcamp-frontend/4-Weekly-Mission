import {
  NONE_IMAGE,
  CARD_STAR,
  CARD_BLUE_STAR,
  KEBAB,
} from "../../../constnats/image";
import * as S from "./CardStyle";

const Card = ({ cardData }) => {
  return cardData.map((link) => (
    <S.Container key={link.id}>
      <S.ImageBox>
        <S.Image src={link.image_source ?? NONE_IMAGE} alt={link.id} />
        <S.StarButton
          src={link.image_source ? CARD_STAR : CARD_BLUE_STAR}
          alt="star"
        />
      </S.ImageBox>
      <S.TextBox>
        <S.KebabBox>
          <S.Time>{link.time}</S.Time>
          <S.Kebab src={KEBAB} alt="kebab" />
        </S.KebabBox>
        <S.Content>{link.description}</S.Content>
        <S.Date>{link.date}</S.Date>
      </S.TextBox>
    </S.Container>
  ));
};

export default Card;
