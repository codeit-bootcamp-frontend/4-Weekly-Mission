import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import shareIcon from "../../assets/svg/share.svg";
import editIcon from "../../assets/svg/edit.svg";
import deleteIcon from "../../assets/svg/trash.svg";

// Modal
import Backdrop from "../common/Backdrop";
import ModalWithInput from "../Modal/ModalWithInput";
import ModalBase from "../Modal/ModalBase";

const Container = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;

  button {
    display: flex;
    gap: 3px;
    text-decoration: none;
    color: var(--gray2);
    background-color: white;
    border: none;
    cursor: pointer;

    img {
      width: 17px;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

interface MenuList {
  optionTitle: string;
  icon: string;
  modalTitle: string;
  modalBtnText?: string;
}

const MENU_LIST: MenuList[] = [
  {
    optionTitle: "공유",
    icon: shareIcon,
    modalTitle: "폴더 공유",
  },
  {
    optionTitle: "이름 변경",
    icon: editIcon,
    modalTitle: "폴더 이름 변경",
    modalBtnText: "변경하기",
  },
  {
    optionTitle: "삭제",
    icon: deleteIcon,
    modalTitle: "폴더 삭제",
    modalBtnText: "삭제하기",
  },
];

function FoderOptionMenu() {
  const [active, setActive] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [btnText, setBtnText] = useState<string>("");
  const [isInputModal, setIsInputModal] = useState<boolean>(false);

  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);

  const handleModalTitle = (list: MenuList) => {
    setTitle(list.modalTitle);
    setBtnText(list.modalBtnText || "");
    setIsInputModal(list.modalTitle === "폴더 이름 변경");
  };

  const ModalInput = ModalWithInput(ModalBase);

  const modal = createPortal(
    isInputModal ? (
      <ModalInput isClose={closeModal} title={title} btntext={btnText} />
    ) : (
      <ModalBase isClose={closeModal} title={title} btntext={btnText} />
    ),
    document.getElementById("modal")!
  );

  const backdrop = createPortal(
    <Backdrop isClose={closeModal} />,
    document.getElementById("backdrop")!
  );

  return (
    <Container>
      {MENU_LIST.map((list) => (
        <button
          key={list.optionTitle}
          onClick={() => {
            openModal();
            handleModalTitle(list);
          }}
        >
          <img src={list.icon} alt={list.optionTitle} />
          <span>{list.optionTitle}</span>
        </button>
      ))}
      {active && modal}
      {active && backdrop}
    </Container>
  );
}

export default FoderOptionMenu;
