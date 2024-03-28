import styled from "styled-components";
import { ReactNode } from "react";

type TagProps = {
  $isSelected: boolean;
};
const TagContainer = styled.button<TagProps>`
  padding: 8px 12px 8px 12px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "var(--color-primary)" : "var(--color-white)"};
  color: ${({ $isSelected }) => $isSelected && "white"};
  font-size: large;
  border: 1px solid var(--color-primary);
  border-radius: 5px;

  white-space: nowrap;

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

interface Props {
  children: ReactNode;
  id: number;
  name: string;
  isSelected: boolean;
  onClick: (id: number, name: string) => void;
}

const Tag = ({ children, id, name, isSelected, onClick }: Props) => {
  return (
    <TagContainer $isSelected={isSelected} onClick={() => onClick(id, name)}>
      {children}
    </TagContainer>
  );
};

export default Tag;
