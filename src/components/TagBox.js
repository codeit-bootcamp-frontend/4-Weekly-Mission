import styled from "styled-components";

const TagBox = ({ children, isSelected }) => {
  const DefaultTagBox = styled.button`
    padding: 8px 12px 8px 12px;
    background-color: var(--color-white);

    font-size: large;
    border: 1px solid var(--color-primary);
    border-radius: 5px;
  `;

  const SelectedTagBox = styled(DefaultTagBox)`
    background-color: var(--color-primary);
    color: white;
  `;
  return isSelected ? (
    <SelectedTagBox>{children}</SelectedTagBox>
  ) : (
    <DefaultTagBox>{children}</DefaultTagBox>
  );
};

export default TagBox;
