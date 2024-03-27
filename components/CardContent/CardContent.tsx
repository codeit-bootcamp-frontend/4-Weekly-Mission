import { KebabMenu } from "../../pages/folder/components/KebabMenu/KebabMenu";
import { useState } from "react";
import { MouseEvent } from "react";
import { FolderListDataForm } from "../../types/DataForm";
import * as S from "./CardContentStyled";

interface CardContentProps {
  elapsedTime: string;
  description: string;
  createdAt: string;
  isHovered: boolean;
  currentLocation: string;
  selectURL: string;
  data: FolderListDataForm[];
}

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
  currentLocation,
  selectURL,
  data,
}: CardContentProps) => {
  const [isOpened, setIsClick] = useState(false);
  const className = isHovered
    ? "CardContent CardContent-hovered"
    : "CardContent";

  const handleClickMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClick(isOpened === false ? true : false);
  };

  return (
    <S.CardContentContainer isHovered={isHovered}>
      <div className="CardContent-time-kebab">
        <S.ElapsedTime>{elapsedTime}</S.ElapsedTime>
        {currentLocation === "/folder" && (
          <button
            type="button"
            className="CardContent-kebab-button"
            onClick={handleClickMenu}
          />
        )}
        {isOpened && <KebabMenu selectURL={selectURL} data={data} />}
      </div>

      <S.Description>{description}</S.Description>
      <S.CreatedAtText>{createdAt}</S.CreatedAtText>
    </S.CardContentContainer>
  );
};
