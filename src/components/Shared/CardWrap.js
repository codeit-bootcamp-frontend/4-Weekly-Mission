import Card from "./Card";

function CardWrap({ folders }) {
  return (
    <div className="container">
      <input
        className="container__search--input"
        placeholder="링크를 검색해 보세요."
      ></input>
      <div className="container__contentWrap">
        {folders.map((folder) => {
          return <Card folder={folder} />;
        })}
      </div>
    </div>
  );
}

export default CardWrap;
