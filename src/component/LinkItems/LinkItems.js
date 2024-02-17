import "./LinkItems.css";
import defaultImage from "../../images/card-default.png";
import { calculateTimePassed } from "../../utils/calculateTimePassed";
import LinkSearchInput from "../LinkSearchInput/LinkSearchInput";
import InputContainer from "./InputContiner";

const LinkItem = ({ link }) => {
  const CREATED_AT = new Date(link.createdAt);
  const YEAR = CREATED_AT.getFullYear();
  const MONTH = CREATED_AT.getMonth() + 1;
  const DATE = CREATED_AT.getDate();
  const CREATED_DATE = `${YEAR}. ${MONTH}. ${DATE}`;

  return (
    <div className="LinkItem">
      <a href={link.url}>
        <img src={link.imageSource || defaultImage} alt="링크 이미지" />
        <p className="createdAt">{calculateTimePassed(CREATED_AT)}</p>
        <p className="description">{link.description}</p>
        <p className="createdDate">{CREATED_DATE}</p>
      </a>
    </div>
  );
};

const LinkItems = ({ links = [] }) => {
  return (
    <div className="LinkItems">
      <InputContainer>
        <LinkSearchInput />
      </InputContainer>
      {links.map((link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkItems;
