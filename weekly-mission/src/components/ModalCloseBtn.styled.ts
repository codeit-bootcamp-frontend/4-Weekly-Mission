import styled from "styled-components";
import closeIcon from "assests/img/close.png";
export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-image: url(${closeIcon});
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
