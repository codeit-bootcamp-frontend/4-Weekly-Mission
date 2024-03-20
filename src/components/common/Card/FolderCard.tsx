import { useState, useEffect, useRef, forwardRef } from "react";
import {
  CARD_NONE_IMAGE,
  CARD_STAR,
  CARD_BLUE_STAR,
  CARD_KEBAB,
} from "../../../constnats/image";
import SelectMenu from "../Popover/SelectMenu";
import { Link, Folder } from "../../../constnats/types";
import * as S from "./CardStyle";

interface Props {
  cardData: Link[];
  folderList: Folder[];
}

const Card = forwardRef(({ cardData, folderList }: Props, ref) => {
  const [isToggledKebab, setIsToggledKebab] = useState<number | null>(null);
  const selectMenuRef = useRef<HTMLDivElement>(null);

  const handleClickKebab = (id: number) => {
    setIsToggledKebab((prev) => (prev === id ? null : id));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectMenuRef.current &&
      !selectMenuRef.current.contains(event.target as Node)
    ) {
      setIsToggledKebab(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return cardData.map((link) => (
    <S.Container key={link.id}>
      <S.ImageBox>
        <S.Image
          src={link.image_source ?? CARD_NONE_IMAGE}
          alt={String(link.id)}
        />
        <S.StarButton
          src={link.image_source ? CARD_STAR : CARD_BLUE_STAR}
          alt="star"
        />
      </S.ImageBox>
      <S.TextBox>
        <S.KebabBox>
          <S.Time>{link.time}</S.Time>
          <S.Kebab
            src={CARD_KEBAB}
            alt="kebab"
            onClick={() => handleClickKebab(link.id)}
          />
        </S.KebabBox>
        {isToggledKebab === link.id && (
          <SelectMenu
            ref={selectMenuRef}
            url={link.url}
            folderList={folderList}
          />
        )}
        <S.Content>{link.description}</S.Content>
        <S.Date>{link.date}</S.Date>
      </S.TextBox>
    </S.Container>
  ));
});

export default Card;
