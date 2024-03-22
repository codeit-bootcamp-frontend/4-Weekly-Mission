import FolderListItemDiv from "./FolderListItemDiv";
import FolderListItemImg from "./FolderListItemImg";
import FolderListItemDescription from "./FolderListItemDescription";
import noImage from "../../../../../assets/img/png/no-image.png";
import { formatDateRelative, formatDate } from "../../../../../util/formatDate";
import FolderListItemTitle from "./FolderListItemTitle";
import StarImg from "./StarImg";
import starOffImg from "../../../../../assets/img/png/star-off.png";
import starOnImg from "../../../../../assets/img/png/star-on.png";
import { MouseEvent, useState } from "react";

import RelativeTimeAndKebab from "./RelativeTimeAndKebab";
import KebabButton from "./kebab/KebbabButton";
import StyledFolderListItem from "./StyledFolderListItem";
import DateDiv from "./DateDiv";
import ListItemProps from "../../../../../@types/ListItem";

function ListItem({ item, onModal }: ListItemProps) {
  const [starred, setStarred] = useState(false);
  const handleStarClick = (e: MouseEvent) => {
    e.preventDefault();
    setStarred(!starred);
  };
  return (
    <StyledFolderListItem
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      key={item.id}
    >
      <FolderListItemDiv>
        <FolderListItemImg
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
          <KebabButton onModal={onModal} linkUrl={item.url} />
        </RelativeTimeAndKebab>
        <FolderListItemTitle>{item.title}</FolderListItemTitle>
        <DateDiv>{formatDate(item.created_at)}</DateDiv>
      </FolderListItemDescription>
    </StyledFolderListItem>
  );
}

export default ListItem;
