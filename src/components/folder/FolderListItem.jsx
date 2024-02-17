import styled from "styled-components";
import FolderListItemDiv from "./FolderListItemDiv";
import FolderListItemImg from "./FolderListItemImg";
import FolderListItemDescription from "./FolderListItemDescription";
import noImage from "../../assets/img/png/no-image.png";
import { formatDateRelative, formatDate } from "../util/formatDate";
import FolderListItemTitle from "./FolderListItemTitle";
import StarImg from "./StarImg";
import starOffImg from "../../assets/img/png/star-off.png";
import starOnImg from "../../assets/img/png/star-on.png";
import { useState } from "react";

import RelativeTimeAndKebab from "./RelativeTimeAndKebab";
import KebabButton from "./KebbabButton";

const ListItem = styled.a`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
`;

function FolderListItem({ item, onHover, hoverdId, onMouseOut }) {
  const [clickedStarId, setClickedStarId] = useState(null);
  const [toggleStarImg, setToggleStarImg] = useState(starOffImg);
  const handleStarClick = (e, id) => {
    e.preventDefault();
    setClickedStarId(id);
    if (e.target.alt === "starOffImg") {
      setToggleStarImg(starOnImg);
      e.target.alt = "starOnImg";
    } else {
      setToggleStarImg(starOffImg);
      e.target.alt = "starOffImg";
    }
  };
  return (
    <ListItem
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      key={item.id}
      onMouseOver={onHover}
      onMouseOut={onMouseOut}
    >
      <FolderListItemDiv>
        <FolderListItemImg
          isHover={item.id === hoverdId ? true : false}
          src={item.image_source || noImage}
          alt={item.image_source || noImage}
        />
        <StarImg
          onClick={(e) => handleStarClick(e, item.id)}
          src={item.id === clickedStarId ? toggleStarImg : toggleStarImg}
          alt="starOffImg"
        />
      </FolderListItemDiv>
      <FolderListItemDescription>
        <RelativeTimeAndKebab>
          {formatDateRelative(item.created_at)}
          <KebabButton />
        </RelativeTimeAndKebab>
        <FolderListItemTitle>{item.title}</FolderListItemTitle>
        <div>{formatDate(item.created_at)}</div>
      </FolderListItemDescription>
    </ListItem>
  );
}

export default FolderListItem;
