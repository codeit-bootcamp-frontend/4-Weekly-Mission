import styled from "styled-components";

const StyledDropdown = styled.div`
  position: absolute;
  top: 25px;
  right: -80px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px;
  z-index: 10;

  @media (max-width: 390px) {
    right: 0px;
  }
`;

export default StyledDropdown;
