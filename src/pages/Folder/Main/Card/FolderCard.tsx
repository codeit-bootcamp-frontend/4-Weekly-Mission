import { useState, useEffect, useRef, forwardRef } from "react";
import SelectMenu from "../Popover/SelectMenu";
import {
  CARD_NONE_IMAGE,
  CARD_STAR,
  CARD_BLUE_STAR,
  CARD_KEBAB,
} from "constnats/image";
import { FolderList, Folder } from "constnats/types";
import * as S from "./CardStyle";

interface Props {
  cardData: Folder[];
  folderList: FolderList[];
}

const Card = forwardRef(({ cardData, folderList }: Props, ref) => {
  const [isToggledKebab, setIsToggledKebab] = useState<number | null>(null);
  const selectMenuRef = useRef<HTMLDivElement>(null);

  const handleClickKebab = (id: number) => {
    setIsToggledKebab((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectMenuRef.current &&
        !selectMenuRef.current.contains(event.target as Node)
      ) {
        setIsToggledKebab(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return cardData.map((card) => (
    <S.Container key={card.id} target="_blank" rel="noreferrer">
      <S.ImageBox>
        <S.Image
          src={card.image_source ?? CARD_NONE_IMAGE}
          alt={String(card.id)}
        />
        <S.StarButton
          src={card.image_source ? CARD_STAR : CARD_BLUE_STAR}
          alt="star"
        />
      </S.ImageBox>
      <S.TextBox>
        <S.KebabBox>
          <S.Time>{card.time}</S.Time>
          <S.Kebab
            src={CARD_KEBAB}
            alt="kebab"
            onClick={() => handleClickKebab(card.id)}
          />
        </S.KebabBox>
        {isToggledKebab === card.id && (
          <SelectMenu
            ref={selectMenuRef}
            url={card.url}
            folderList={folderList}
          />
        )}
        <S.Content>{card.description}</S.Content>
        <S.Date>{card.date}</S.Date>
      </S.TextBox>
    </S.Container>
  ));
});

export default Card;
