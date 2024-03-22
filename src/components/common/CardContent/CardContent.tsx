import React, { useState, useEffect, useRef, MouseEvent } from "react";
import ModalDelete from "../../Folder/Modal/ModalDelete/ModalDelete.tsx";
import ModalEdit from "../../Folder/Modal/ModalEdit/ModalEdit.tsx";
import * as S from "./CardContentStyled.tsx";

interface CardContentProps {
  elapsedTime: string;
  description: string;
  createdAt: string;
}
function CardContent({
  elapsedTime,
  description,
  createdAt,
}: CardContentProps) {
  const [isClick, setIsClick] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsClick(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePopover = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setIsClick((click) => !click);
  };

  const handleDeleteOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDeleteModalOpen(true);
  };

  const handleEditOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEditModalOpen(true);
  };

  return (
    <S.CardContent>
      <span className="CardContent-elapsed-time">{elapsedTime}</span>
      <S.Kebab
        src="images/kebab.svg"
        alt="더보기를 나타내는 점 3개"
        onClick={handlePopover}
      />
      {isClick && (
        <S.Popover ref={popoverRef}>
          <S.PopoverButton onClick={handleDeleteOpen}>삭제하기</S.PopoverButton>
          {isDeleteModalOpen && (
            <ModalDelete
              setIsDeleteModalOpen={setIsDeleteModalOpen}
              text="폴더 삭제"
              buttonText="삭제하기"
            />
          )}
          <S.Button onClick={handleEditOpen}>폴더추가</S.Button>
          {isEditModalOpen && (
            <ModalEdit
              setIsEditModalOpen={setIsEditModalOpen}
              text="폴더 추가"
              buttonText="추가하기"
            />
          )}
        </S.Popover>
      )}
      <S.Description>{description}</S.Description>
      <S.CreatedAt>{createdAt}</S.CreatedAt>
    </S.CardContent>
  );
}

export default CardContent;
