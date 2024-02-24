import styled from "styled-components";
import closeImg from "../../../assets/img/png/modal-close.png";

const CloseButton = styled.div`
  background-image: url(${closeImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default CloseButton;
