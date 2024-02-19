import "./LinkItems.css";
import defaultImage from "../../images/card-default.png";
import { calculateTimePassed } from "../../utils/calculateTimePassed";
import styled from "styled-components";

const LinkImage = styled.div`
  background-image: url("${({ src }) => src}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 200px;
  border-radius: 1rem 1rem 0 0;
  transition: background-size 0.3s ease-in-out;

  &:hover {
    background-size: 130%;
  }
`;

const LinkItem = ({ link }) => {
  const CREATED_AT = new Date(link.createdAt || link.created_at);
  const YEAR = CREATED_AT.getFullYear();
  const MONTH = CREATED_AT.getMonth() + 1;
  const DATE = CREATED_AT.getDate();
  const CREATED_DATE = `${YEAR}. ${MONTH}. ${DATE}`;

  return (
    <a className="LinkItem" href={link.url} target="_blank">
      <LinkImage src={link.imageSource || link.image_source || defaultImage} />
      <p className="createdAt">{calculateTimePassed(CREATED_AT)}</p>
      <p className="description">{link.description}</p>
      <p className="createdDate">{CREATED_DATE}</p>
    </a>
  );
};

const LinkItems = ({ links = [] }) => {
  return (
    <div className="LinkItems">
      {links.map((link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkItems;
