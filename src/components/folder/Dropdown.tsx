import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Backdrop from "../common/Backdrop";
import ModalBase from "../Modal/ModalBase";

const Container = styled.ul`
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.2);
  width: 100px;
`;

const MenuList = styled.li`
  width: 100px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #e7effb;
    color: var(--primary);
  }
`;

interface MenuList {
  optionTitle: string;
  modalTitle: string;
  modalBtnText: string;
}

const MENU_LIST = [
  {
    optionTitle: "삭제하기",
    modalTitle: "링크 삭제",
    modalBtnText: "삭제하기",
  },
  {
    optionTitle: "폴더에 추가",
    modalTitle: "폴더에 추가",
    modalBtnText: "추가하기",
  },
];

function Dropdown() {
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("");
  const [btnText, setBtnText] = useState("");

  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);

  const handleModalTitle = (list: MenuList) => {
    setTitle(list.modalTitle);
    setBtnText(list.modalBtnText);
  };

  const modal = createPortal(
    <ModalBase isClose={closeModal} title={title} btntext={btnText} />,
    document.getElementById("modal")!
  );

  const backdrop = createPortal(
    <Backdrop isClose={closeModal} />,
    document.getElementById("backdrop")!
  );

  return (
    <Container>
      {MENU_LIST.map((list) => (
        <MenuList
          key={list.optionTitle}
          onClick={() => {
            openModal();
            handleModalTitle(list);
          }}
        >
          {list.optionTitle}
        </MenuList>
      ))}
      {active && modal}
      {active && backdrop}
    </Container>
  );
}

export default Dropdown;
