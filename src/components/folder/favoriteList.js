import { FolderCard } from "../card/folderCard";
import "./favoriteList.css";
import { useFavoriteList } from "../../hooks/useFavoriteList";
import styled from "styled-components";

const FavoriteButton = styled.div`
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  border: 1px solid var(--primary);
  &:hover {
    background-color: ${(props) =>
      props.selected ? "var(--primary)" : "var(--gray10)"};
  }
  background-color: ${(props) => (props.selected ? "var(--primary)" : "#fff")};
  color: ${(props) => (props.selected ? "var(--white)" : "var(--black)")};
  transition: all 0.3s ease-in;
`;

export const FavoriteList = ({ handleChange, id }) => {
  const { favoriteList } = useFavoriteList();
  console.log("id", id);
  return (
    <div className="favoriteWrapper">
      <FavoriteButton selected={id === null} onClick={() => handleChange(null)}>
        전체
      </FavoriteButton>
      {favoriteList?.map((v) => (
        <FavoriteButton
          selected={id === v.id}
          onClick={() => handleChange(v)}
        >
          {v.name}
        </FavoriteButton>
      ))}
    </div>
  );
};
