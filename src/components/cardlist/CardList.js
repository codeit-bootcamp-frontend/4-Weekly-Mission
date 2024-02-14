import SearchInput from "../searchbar/SearchInput";
import "./CardList.css";
import noImg from "../../assets/이미지 없을 때 배경.png";

function CardList({ userData }) {
  if (!userData) {
    return <div>Loading...</div>;
  }

  const links = userData.links ?? "유저 링크";
  return (
    <div>
      <SearchInput />
      <div>
        <ul>
          {links.map(
            ({ id, createdAt, url, title, description, imageSource }) => {
              return (
                <li key={id}>
                  <a href={url}>
                    <div className="imgBox">
                      <img
                        src={imageSource ? imageSource : noImg}
                        alt={title}
                      />
                    </div>
                    <div className="textBox">
                      <span>{createdAt}</span>
                      <p className="description">{description}</p>
                      <p className="date">{createdAt}</p>
                    </div>
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}

export default CardList;
