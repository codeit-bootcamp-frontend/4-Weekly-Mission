import styled from "styled-components";

const DefaultTagBox = styled.button`
  padding: 8px 12px 8px 12px;
  background-color: var(--color-white);

  font-size: large;
  border: 1px solid var(--color-primary);
  border-radius: 5px;

  white-space: nowrap;

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

const SelectedTagBox = styled(DefaultTagBox)`
  background-color: var(--color-primary);
  color: white;
`;

const TagBox = ({ children, id, isSelected, onClick }) => {
  return isSelected ? (
    <SelectedTagBox id={id} onClick={onClick}>
      {children}
    </SelectedTagBox>
  ) : (
    <DefaultTagBox id={id} onClick={onClick}>
      {children}
    </DefaultTagBox>
  );
};

export default TagBox;
