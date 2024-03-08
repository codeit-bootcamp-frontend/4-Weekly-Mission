import * as S from "./CardStyle";
import { NONE_IMAGE } from "../../../constnats/image";

const Card = ({ cardData }) => {
  console.log(cardData);
  return cardData.map((link) => (
    <S.Container key={link.id}>
      <S.Image src={link.imageSource ?? NONE_IMAGE} alt={link.id} />
      <S.Box>
        <S.Time>{link.time}</S.Time>
        <S.Content>{link.description}</S.Content>
        <S.Date>{link.date}</S.Date>
      </S.Box>
    </S.Container>
  ));
};

export default Card;
