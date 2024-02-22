import { FolderCard } from "../card/folderCard";
import "./favoriteList.css";
import { useFavoriteList } from "../../hooks/useFavoriteList";

export const FavoriteList = ({ handleChange }) => {
  const { favoriteList } = useFavoriteList();
  return (
    <div className="favoriteWrapper">
      <div className="favoriteBox" onClick={() => handleChange(null)}>
        전체
      </div>
      {favoriteList?.map((v) => (
        <div className="favoriteBox" onClick={() => handleChange(v.id)}>
          {v.name}
        </div>
      ))}
    </div>
  );
};
