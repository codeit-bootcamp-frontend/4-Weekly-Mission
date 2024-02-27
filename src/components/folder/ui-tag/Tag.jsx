import styled from "styled-components";

const TagContainer = styled.button`
  padding: 8px 12px 8px 12px;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--color-primary)" : "var(--color-white)"};
  color: ${({ isSelected }) => isSelected && "white"};
  font-size: large;
  border: 1px solid var(--color-primary);
  border-radius: 5px;

  white-space: nowrap;

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

const Tag = ({ children, id, name, isSelected, onClick }) => {
  const handleClick = () => {
    onClick(id, name);
  };
  return (
    <TagContainer isSelected={isSelected} id={id} onClick={handleClick}>
      {children}
    </TagContainer>
  );
};

export default Tag;
