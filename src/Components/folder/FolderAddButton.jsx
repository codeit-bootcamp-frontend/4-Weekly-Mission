import React from "react";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";

const AddButton = styled.div`
  display: flex;
  gap: 4px;
  width: 20%;
  justify-content: flex-end;
`;

const Name = styled.p`
  color: #6d6afe;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;

const iconStyle = {
  color: "#6d6afe",
};

function FolderAddButton() {
  return (
    <AddButton>
      <Name>폴더추가</Name>
      <IoMdAdd style={iconStyle} />
    </AddButton>
  );
}

export default FolderAddButton;
