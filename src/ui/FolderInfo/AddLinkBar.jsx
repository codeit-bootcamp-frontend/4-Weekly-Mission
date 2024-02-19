import { Text, Button, SearchBar, SearchIcon, StyledAddLinkBar } from "./FolderInfoCss";
import { SEARCH_IMAGE } from "./constant";

export const AddLinkBar = () => {
  return (
    <StyledAddLinkBar>
      <SearchIcon src={SEARCH_IMAGE} alt="url 아이콘" />
      <SearchBar
        type="text"
        placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;링크를 추가해 보세요" />
      <Button>
        <Text>추가하기</Text>
      </Button>
    </StyledAddLinkBar>
  );
};