import React from "react";
import styled from "styled-components";
import ActionIcon from "./ActionIcon";

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  @media (min-width: 375px) and (max-width: 767px) {
    justify-content: left;
  }
`;
const ActionIconList = () => {
  return (
    <IconsContainer>
      <ActionIcon imageSrc="/icons/share_icon.svg" iconTitle="공유" />
      <ActionIcon imageSrc="/icons/pen_icon.svg" iconTitle="이름 변경" />
      <ActionIcon imageSrc="/icons/delete_icon.svg" iconTitle="삭제" />
    </IconsContainer>
  );
};

export default ActionIconList;
