import { getElapsedTime } from "./getElapsedTime";
import { formatDate } from "./createAt";

function Content({ folder }) {
  const CreateAt = formatDate(folder.createdAt);
  const UploadTime = getElapsedTime(folder.createdAt);

  return (
    <div id={folder.id} key={folder.id} className="container__content">
      <div className="container__content--imgWrap">
        <img
          className="container__content--img"
          src={folder.imageSource}
          alt="contentImg"
        />
      </div>
      <div className="container__content--text">
        <p className="container__content--uploadTime">{UploadTime}</p>
        <p className="container__content--description">{folder.description}</p>
        <p className="container__content--createAt">{CreateAt}</p>
      </div>
    </div>
  );
}

function Container({ folders }) {
  return (
    <div className="container">
      <div className="container__search">
        <input
          className="container__search--input"
          placeholder="링크를 검색해 보세요."
        ></input>
      </div>
      <div className="container__contentWrap">
        {folders.map((folder) => {
          return <Content folder={folder} />;
        })}
      </div>
    </div>
  );
}

export default Container;
