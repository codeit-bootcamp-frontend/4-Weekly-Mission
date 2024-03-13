import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.displays.rowCenter};
  gap: 12px;
`;

export const SortButton = styled.button`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme, $isfocused }) =>
    $isfocused ? theme.colors.primary : theme.colors.white};
  color: ${({ theme, $isfocused }) =>
    $isfocused ? theme.colors.white : theme.colors.black};
`;
