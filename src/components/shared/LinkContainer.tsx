import noImage from "../../assets/img/png/no-image.png";
import DateDiv from "../folder/folderMain/folderListItem/listItem/DateDiv";
import FolderListItemDescription from "../folder/folderMain/folderListItem/listItem/FolderListItemDescription";
import FolderListItemImg from "../folder/folderMain/folderListItem/listItem/FolderListItemImg";
import FolderListItemTitle from "../folder/folderMain/folderListItem/listItem/FolderListItemTitle";
import RelativeTimeAndKebab from "../folder/folderMain/folderListItem/listItem/RelativeTimeAndKebab";
import StyledFolderListItem from "../folder/folderMain/folderListItem/listItem/StyledFolderListItem";
import { formatDateRelative, formatDate } from "../../util/formatDate";
import { LinkContainerProps } from "../../@types/LinkContainer";

function LinkContainer({ item }: LinkContainerProps) {
  return (
    <StyledFolderListItem
      className="link-grid-element"
      target="_blank"
      rel="noopener noreferrer"
      href={item.url}
    >
      <div className="link-image-container">
        <FolderListItemImg
          className="link-image-sizing"
          src={item.imageSource || noImage}
          alt={item.imageSource || "no-Image"}
        />
      </div>

      <div className="link-grid-div">
        <FolderListItemDescription>
          <RelativeTimeAndKebab>
            {formatDateRelative(item.createdAt)}
          </RelativeTimeAndKebab>
          <FolderListItemTitle>{item.title}</FolderListItemTitle>
          <DateDiv>{formatDate(item.createdAt)}</DateDiv>
        </FolderListItemDescription>
      </div>
    </StyledFolderListItem>
  );
}

export default LinkContainer;
