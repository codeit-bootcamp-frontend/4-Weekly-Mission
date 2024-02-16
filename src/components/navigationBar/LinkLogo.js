import styled from "styled-components";
import logoSvg from "../../assets/img/svg/logo.svg";

const LinkLogo = styled.div`
  width: 133px;
  height: 24px;
  background-image: url(${logoSvg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    width: 88.67px;
    height: 16px;
  }
`;
export default LinkLogo;
