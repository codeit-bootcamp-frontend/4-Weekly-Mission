import styled from "styled-components";
import CTA from "./CTA";

const LoginCTA = styled(CTA)`
  width: 128px;
  padding: 16px 20px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 80px;
    padding: 10px 16px;
    font-size: 14px;
  }
`;

export default LoginCTA;
