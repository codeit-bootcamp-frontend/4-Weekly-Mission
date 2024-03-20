import { CARD_NONE_IMAGE } from "../../../constnats/image";
import { Link } from "../../../constnats/types";
import * as S from "./CardStyle";

interface Props {
  cardData: Link[];
}

const Card = ({ cardData }: Props) => {
  return cardData.map((link: Link) => (
    <S.Container key={link.id} href={link.url} target="_blank" rel="noreferrer">
      <S.ImageBox>
        <S.Image
          src={link.imageSource ?? CARD_NONE_IMAGE}
          alt={String(link.id)}
        />
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
