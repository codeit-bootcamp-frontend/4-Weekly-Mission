import { CARD_NONE_IMAGE } from "constants/image";
import { Share } from "constants/types";
import * as S from "../../../Folder/Main/Card/CardStyle";

interface Props {
  cardData: Share[];
}

const Card = ({ cardData }: Props) => {
  return cardData.map((link: Share) => (
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
