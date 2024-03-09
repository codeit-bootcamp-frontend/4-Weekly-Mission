import * as S from "./CardStyle";
import { NONE_IMAGE } from "../../../constnats/image";

const Card = ({ cardData }) => {
  return cardData.map((link) => (
    <S.Container key={link.id}>
      <S.ImageBox>
        <S.Image src={link.image_source ?? NONE_IMAGE} alt={link.id} />
      </S.ImageBox>
      <S.TextBox>
        <S.Time>{link.time}</S.Time>
        <S.Content>{link.description}</S.Content>
        <S.Date>{link.date}</S.Date>
      </S.TextBox>
    </S.Container>
  ));
};

export default Card;
