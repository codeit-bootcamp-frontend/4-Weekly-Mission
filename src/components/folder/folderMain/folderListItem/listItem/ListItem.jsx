import FolderListItemDiv from "./FolderListItemDiv";
import FolderListItemImg from "./FolderListItemImg";
import FolderListItemDescription from "./FolderListItemDescription";
import noImage from "../../../../../assets/img/png/no-image.png";
import { formatDateRelative, formatDate } from "../../../../util/formatDate";
import FolderListItemTitle from "./FolderListItemTitle";
import StarImg from "./StarImg";
import starOffImg from "../../../../../assets/img/png/star-off.png";
import starOnImg from "../../../../../assets/img/png/star-on.png";
import { useState } from "react";

import RelativeTimeAndKebab from "./RelativeTimeAndKebab";
import KebabButton from "./kebab/KebbabButton";
import StyledFolderListItem from "./StyledFolderListItem";
import DateDiv from "./DateDiv";

function ListItem({ item, onHover, hoverdId, onMouseOut }) {
  const [clickedStarId, setClickedStarId] = useState(null);
  const [toggleStarImg, setToggleStarImg] = useState(starOffImg);
  const [starred, setStarred] = useState(false);
  const handleStarClick = (e, id) => {
    e.preventDefault();
    setClickedStarId(id);
    if (starred) {
      setToggleStarImg(starOffImg);
      e.target.alt = "starOffImg";
    } else {
      setToggleStarImg(starOnImg);
      e.target.alt = "starOnImg";
    }
    setStarred(!starred);
  };
  return (
    <StyledFolderListItem
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      key={item.id}
      onMouseOver={onHover}
      onMouseOut={onMouseOut}
      isHover={item.id === hoverdId}
    >
      <FolderListItemDiv>
        <FolderListItemImg
          isHover={item.id === hoverdId}
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
          <KebabButton isHover={item.id === hoverdId} />
        </RelativeTimeAndKebab>
        <FolderListItemTitle>{item.title}</FolderListItemTitle>
        <DateDiv>{formatDate(item.created_at)}</DateDiv>
      </FolderListItemDescription>
    </StyledFolderListItem>
  );
}

export default ListItem;
