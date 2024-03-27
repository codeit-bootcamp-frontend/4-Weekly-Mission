import React from "react";
import "../Styles/FolderHeader.css";
import ModalAddLink from "./Modal/ModalAddLink";
import useModalOpen from "../Hooks/useModalOpen";
import link from "../Assets/image/link.svg";

export function FolderHeader() {
  const { handleModalOpen, isOpen, setIsOpen } = useModalOpen();
  return (
    <>
      <form>
        <div className="linkInputContainer">
          <div className="link">
            <input
              className="linkInput"
              placeholder="링크를 추가해 보세요"
            ></input>
            <img src={link} className="linkImg" alt="링크 아이콘"></img>
            <button className="linkAddBtn" onClick={handleModalOpen}>
              추가하기
            </button>
            {isOpen && (
              <ModalAddLink
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                url={""}
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
}
