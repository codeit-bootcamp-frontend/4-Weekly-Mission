import styled from "styled-components";

export const Button = styled.button`
  ${({ theme }) => theme.displays.rowCenter};
  width: 128px;
  padding: 16px 20px;

  gap: 10px;
`;
