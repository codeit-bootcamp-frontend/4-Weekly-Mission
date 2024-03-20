import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SortButton = styled.button<{ $isfocused: boolean }>`
  padding: 8px 12px;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  background: ${({ theme, $isfocused }) =>
    $isfocused ? theme.colors.primary : theme.colors.white};
  color: ${({ theme, $isfocused }) =>
    $isfocused ? theme.colors.white : theme.colors.black};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
