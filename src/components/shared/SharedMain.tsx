import "./SharedMain.css";
import LinkContainer from "./LinkContainer";
import MainContainer from "../folder/MainContainer";
import SearchLinkInput from "../folder/SearchLinkInput";
import FolderContainer from "../folder/FolderContainer";
import ListContainer from "../folder/folderMain/folderListItem/ListContainer";
import SearchLinkInputContainer from "../folder/SearchLinkInputContainer";
import SearchCloseButton from "../folder/SearchCloseButton";
import SharedMainProps from "../../@types/SharedMain";
import { LinksData } from "../../@types/FolderData";

function SharedMain({
  ownerProfile,
  isFocus,
  closeButtonRef,
  handleCloseClick,
  inputValue,
  filterdItem,
  handleInputChange,
  handleInputClick,
}: SharedMainProps) {
  const { links, name, owner } = ownerProfile;

  const itemstoRender = inputValue ? filterdItem : links;
  const hasItemsToRender = itemstoRender?.length;

  return (
    <FolderContainer>
      <section className="column-center-gap-30 shared-section-first-container">
        <div className="image-container">
          <img
            className="image-sizing"
            src={owner.profileImageSource}
            alt="ownerImage"
          />
          <span>{owner.name}</span>
        </div>
        <span className="owner-name-font">{name}</span>
      </section>

      <MainContainer>
        <SearchLinkInputContainer>
          <SearchLinkInput
            id="searchLinkInput"
            type="text"
            placeholder="링크를 검색해 보세요"
            onClick={handleInputClick}
            onChange={handleInputChange}
            value={inputValue}
          />
          {isFocus && (
            <SearchCloseButton
              ref={closeButtonRef}
              onClick={handleCloseClick}
            />
          )}
        </SearchLinkInputContainer>
        {hasItemsToRender > 0 ? (
          <ListContainer>
            {itemstoRender.map((item: LinksData) => (
              <LinkContainer item={item} key={item.id} />
            ))}
          </ListContainer>
        ) : (
          <div style={{ paddingBottom: `50px` }}>저장된 링크가 없습니다</div>
        )}
      </MainContainer>
    </FolderContainer>
  );
}

export default SharedMain;
