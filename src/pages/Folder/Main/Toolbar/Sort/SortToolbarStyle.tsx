import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const SortButton = styled.button<{ $isfocused: boolean }>`
  padding: 0.5rem 0.75rem;

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
