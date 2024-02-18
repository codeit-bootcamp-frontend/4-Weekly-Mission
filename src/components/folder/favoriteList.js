import "./favoriteList.css";

export const FavoriteList = ({ data }) => {
  return (
    <div className="favoriteWrapper">
      <div className="favoriteBox">전체</div>
      {data?.map((v) => (
        <div className="favoriteBox">{v.name}</div>
      ))}
    </div>
  );
};
