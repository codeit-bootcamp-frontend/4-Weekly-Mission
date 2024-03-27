import React from "react";
import "../Styles/FolderTools.css";
import ModalEdit from "./Modal/ModalEdit";
import useModalOpen from "../Hooks/useModalOpen";
import ModalDeleteFolder from "./Modal/ModalDeleteFolder";
import { useFolder } from "../Hooks/useFolder";
import share from "../Assets/image/share.svg";
import pen from "../Assets/image/pen.svg";
import deleteImg from "../Assets/image/delete.svg";

interface FolderToolsProps {
  id: string;
}

function FolderTools({ id }: FolderToolsProps) {
  const { handleModalOpen, isOpen, setIsOpen, clickValue, setClickValue } =
    useModalOpen();
  const { currentMenu } = useFolder();
  return (
    <>
      <div className="tools">
        <div className="icon">
          <img src={share} alt="공유 아이콘" />
        </div>
        <div className="icon">
          <img
            src={pen}
            alt="이름변경 아이콘"
            onClick={() => {
              setClickValue("이름 변경");
              handleModalOpen();
            }}
          />
        </div>
        <div className="icon">
          <img
            src={deleteImg}
            alt="삭제 아이콘"
            onClick={() => {
              setClickValue("삭제");
              handleModalOpen();
            }}
          />
        </div>
      </div>
      {isOpen && clickValue === "이름 변경" ? (
        <ModalEdit isOpen={isOpen} onClose={() => setIsOpen(false)} />
      ) : isOpen && clickValue === "삭제" ? (
        <ModalDeleteFolder
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          currentMenu={currentMenu}
        />
      ) : // 여기서 currentMenu 부분이 자꾸 전체로 뜨는데 어디에서 잘못된 걸까요..? ㅠㅠ
      null}
    </>
  );
}

export default FolderTools;
