import styled, { css } from "styled-components";
import kebabImg from "../../../../../../assets/img/png/kebab.png";
const StyledDiv = styled.div`
  background-image: url(${kebabImg});
  background-size: 21px 17px;
  background-repeat: no-repeat;
  width: 21px;
  border: none;
  background-color: white;
  position: relative;
  ${({ isHover }) =>
    isHover &&
    css`
      background-color: #f0f6ff;
    `}
`;

export default StyledDiv;
