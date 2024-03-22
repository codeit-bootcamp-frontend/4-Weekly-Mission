import styled, { css } from "styled-components";

const AddLinkContainer = styled.div<{ $hide?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f6ff;
  padding: 60px 0 90px 0;
  width: 100%;
  ${({ $hide }) =>
    $hide &&
    css`
      position: fixed;
      bottom: 0px;
      padding: 30px 0;
      z-index: 10;
    `};
  @media (max-width: 1124px) {
    padding: 40px 32px;
  }
`;

export default AddLinkContainer;
