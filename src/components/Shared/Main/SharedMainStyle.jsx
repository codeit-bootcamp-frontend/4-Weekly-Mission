import styled from "styled-components";

export const Container = styled.main`
  ${({ theme }) => theme.displays.flexCenter};
  padding: 40px 0 100px;
  gap: 40px;
  background: ${({ theme }) => theme.colors.white};
`;
