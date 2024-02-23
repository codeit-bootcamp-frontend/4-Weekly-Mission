import React, { useState } from "react";
import styled from "styled-components";

import shareIcon from "../../assets/svg/share.svg";
import editIcon from "../../assets/svg/edit.svg";
import deleteIcon from "../../assets/svg/trash.svg";
import Modal, { ModalWithInput } from "../common/Modal";
import { createPortal } from "react-dom";
import Backdrop from "../common/Backdrop";

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

const MENU_LIST = [
  {
    title: "공유",
    url: "/",
    icon: shareIcon,
    modal: "share",
  },
  {
    title: "이름 변경",
    url: "/",
    icon: editIcon,
    modal: "edit",
  },
  {
    title: "삭제",
    url: "/",
    icon: deleteIcon,
    modal: "delete",
  },
];

function FoderOptionMenu() {
  const [active, setActive] = useState(false);

  const openModal = () => setActive(true);

  const closeModal = () => setActive(false);

  const ModalHOC = ModalWithInput(Modal);

  const modal = createPortal(
    <ModalHOC isClose={closeModal} />,
    // <Modal isClose={closeModal} />,
    document.getElementById("modal")
  );

  const backdrop = createPortal(
    <Backdrop isClose={closeModal} />,
    document.getElementById("backdrop")
  );

  // this
  // Function.prototype.call
  // Function.prototype.apply
  // Function.prototype.bind

  return (
    <Container>
      {MENU_LIST.map((list) => (
        <button key={list.title} onClick={openModal.bind(this, list)}>
          <img src={list.icon} alt={list.title} />
          <span>{list.title}</span>
        </button>
      ))}
      {active && modal}
      {active && backdrop}
    </Container>
  );
}

export default FoderOptionMenu;
