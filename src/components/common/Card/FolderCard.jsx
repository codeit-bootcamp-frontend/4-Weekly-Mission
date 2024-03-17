import { useState, useEffect, useRef, forwardRef } from "react";
import {
  CARD_NONE_IMAGE,
  CARD_STAR,
  CARD_BLUE_STAR,
  CARD_KEBAB,
} from "../../../constnats/image";
import SelectMenu from "../Popover/SelectMenu";
import * as S from "./CardStyle";

const Card = forwardRef(({ cardData, folderList }, ref) => {
  const [isToggledKebab, setIsToggledKebab] = useState(null);
  const selectMenuRef = useRef(null);

  const handleClickKebab = (id) => {
    setIsToggledKebab((prev) => (prev === id ? null : id));
  };

  const handleClickOutside = (event) => {
    if (
      selectMenuRef.current &&
      !selectMenuRef.current.contains(event.target)
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
        <S.Image src={link.image_source ?? CARD_NONE_IMAGE} alt={link.id} />
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
            onClose={handleClickOutside}
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
