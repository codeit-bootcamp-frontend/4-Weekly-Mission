import "./LinkCard.css";
import "./LinkCardCollection.css";
import { Link } from "react-router-dom";
import KebabMenu from "./Utils/KebabMenu";
import timePassedFromCreate from "src/Utils/timePassedFromCreate";
import UserLinkDataType from "src/@types/UserLinkDataType";

interface FolderCardDataPropType {
  contents: UserLinkDataType;
  favorite?: boolean;
  kebab?: boolean;
}

const FolderCard = function ({
  contents,
  favorite,
  kebab,
}: FolderCardDataPropType) {
  const {
    id,
    created_at,
    createdAt,
    description,
    imageSource,
    image_source,
    url,
  } = contents;

  const cardImage = { backgroundImage: `url(${imageSource || image_source})` };
  const timeConversion = new Date(created_at || createdAt!); // sampleApi와 userApi의 양식이 달라 호환시키기 위함
  const passedTime = timePassedFromCreate(timeConversion);
  const editedTime = `${timeConversion.getFullYear()}. ${
    timeConversion.getMonth() + 1
  }. ${timeConversion.getDate()}`;

  return (
    <div className="card-box-origin" key={id}>
      <div className="card-content">
        <Link to={url} target="_blank">
          {imageSource || image_source ? (
            <div className={"card-image"} style={cardImage} />
          ) : (
            <div className="card-image no-card-img"></div>
          )}

          <section className="card-text">
            <p className="card-passed-time">{passedTime}</p>
            <p className="card-contents">{description}</p>
            <p className="card-edited-date">{editedTime}</p>
          </section>
        </Link>
      </div>
      {kebab && <KebabMenu items={kebab} data={url} />}
      {favorite && (
        <button type="button" className="favor-star">
          <img src="star.svg" alt="FavoriteButton" />
        </button>
      )}
    </div>
  );
};

interface LinkCardCollectionPropType {
  items: UserLinkDataType[];
  favorite?: boolean;
  kebab?: any;
}

const LinkCardCollection = function ({
  items,
  favorite = false,
  kebab = false,
}: LinkCardCollectionPropType) {
  return (
    <section className="folder-card-grid">
      {items.map((item) => (
        <FolderCard
          key={item.id}
          contents={item}
          favorite={favorite}
          kebab={kebab}
        />
      ))}
    </section>
  );
};

export default LinkCardCollection;
