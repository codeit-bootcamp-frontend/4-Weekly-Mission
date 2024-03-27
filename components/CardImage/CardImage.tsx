import * as S from "./CardImageStyled";
import { DEFAULT_IMAGE } from "./constant";

interface Props {
  imageSource: string;
  isZoomedIn: boolean;
}

export const CardImage = ({ imageSource, isZoomedIn }: Props) => {
  return (
    <S.CardImageContainer
      isZoomedIn={isZoomedIn}
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
    />
  );
};
