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

function ListItem({
  item,
  onHover,
  hoverdId,
  onMouseOut,
  handleDeleteLinkModal,
  handleAddModal,
}) {
  const [starred, setStarred] = useState(false);
  const handleStarClick = (e) => {
    e.preventDefault();
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
        {starred && (
          <StarImg
            onClick={(e) => handleStarClick(e)}
            src={starOnImg}
            alt="starOnImg"
          />
        )}
        {!starred && (
          <StarImg
            onClick={(e) => handleStarClick(e)}
            src={starOffImg}
            alt="starOffImg"
          />
        )}
      </FolderListItemDiv>
      <FolderListItemDescription>
        <RelativeTimeAndKebab>
          {formatDateRelative(item.created_at)}
          <KebabButton
            handleDeleteLinkModal={handleDeleteLinkModal}
            handleAddModal={handleAddModal}
            linkUrl={item.url}
            isHover={item.id === hoverdId}
          />
        </RelativeTimeAndKebab>
        <FolderListItemTitle>{item.title}</FolderListItemTitle>
        <DateDiv>{formatDate(item.created_at)}</DateDiv>
      </FolderListItemDescription>
    </StyledFolderListItem>
  );
}

export default ListItem;
