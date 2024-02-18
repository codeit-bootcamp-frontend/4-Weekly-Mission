import React from "react";
import styled from "styled-components";

import shareIcon from "../../assets/svg/share.svg";
import editIcon from "../../assets/svg/edit.svg";
import deleteIcon from "../../assets/svg/trash.svg";

const Container = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;

  a {
    display: flex;
    gap: 3px;
    text-decoration: none;
    color: var(--gray2);

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
  },
  {
    title: "이름 변경",
    url: "/",
    icon: editIcon,
  },
  {
    title: "삭제",
    url: "/",
    icon: deleteIcon,
  },
];

function FoderOptionMenu() {
  return (
    <Container>
      {MENU_LIST.map((list) => (
        <li key={list.title}>
          <a href={list.url}>
            <img src={list.icon} alt={list.title} />
            <span>{list.title}</span>
          </a>
        </li>
      ))}
    </Container>
  );
}

export default FoderOptionMenu;
