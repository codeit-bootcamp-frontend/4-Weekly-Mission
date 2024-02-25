import React from "react";
import styled from "styled-components";

const OptionList = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 767px) {
    margin-top: 12px;
  }
`;

const Option = styled.div`
  display: flex;
  gap: 4px;
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 14px;
  font-weight: 600;
`;

function FolderOption() {
  return (
    <OptionList>
      <Option>
        <img src="/Icons/share.svg" alt="공유" />
        <p>공유</p>
      </Option>
      <Option>
        <img src="/Icons/pen.svg" alt="이름 변경" />
        <p>이름 변경</p>
      </Option>
      <Option>
        <img src="/Icons/delete.svg" alt="삭제" />
        <p>삭제</p>
      </Option>
    </OptionList>
  );
}

export default FolderOption;
