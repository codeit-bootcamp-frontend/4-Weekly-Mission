import "./LinkItems.css";
import defaultImage from "../../images/card-default.png";
import { calculateTimePassed } from "../../utils/calculateTimePassed";
import {
  LinkImage,
  LinkImageLoading,
  LinkLoading,
  LoadingAnimation,
} from "./style";

const LinkItem = ({ link }) => {
  const CREATED_AT = new Date(link.createdAt || link.created_at);
  const YEAR = CREATED_AT.getFullYear();
  const MONTH = CREATED_AT.getMonth() + 1;
  const DATE = CREATED_AT.getDate();
  const CREATED_DATE = `${YEAR}. ${MONTH}. ${DATE}`;

  return (
    <a className="LinkItem" href={link.url} target="_blank" rel="noreferrer">
      <LinkImage src={link.imageSource || link.image_source || defaultImage} />
      <p className="createdAt">{calculateTimePassed(CREATED_AT)}</p>
      <p className="description">{link.description}</p>
      <p className="createdDate">{CREATED_DATE}</p>
    </a>
  );
};

const LinkItems = ({ links = [], isLoading }) => {
  return (
    <div className="LinkItems">
      {isLoading ? (
        <LoadingAnimation>
          <div className="LinkItem">
            <LinkImageLoading />
            <LinkLoading />
            <LinkLoading />
          </div>
        </LoadingAnimation>
      ) : (
        links.map((link) => <LinkItem key={link.id} link={link} />)
      )}
      {isLoading || links.length || <div>저장된 링크가 없습니다.</div>}
    </div>
  );
};

export default LinkItems;
