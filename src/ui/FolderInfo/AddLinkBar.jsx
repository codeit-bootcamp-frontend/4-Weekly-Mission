import { StyledAddLinkBar } from "./FolderInfoCss";

export const AddLinkBar = () => {
  return (
    <StyledAddLinkBar>
      <img className="icon" src="/assets/folder/url.svg" alt="url 아이콘" />
      <input
        className="search-bar"
        type="text"
        placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;링크를 추가해 보세요" />
      <button className="button">
        <p className="text">추가하기</p>
      </button>
    </StyledAddLinkBar>
  );
};
