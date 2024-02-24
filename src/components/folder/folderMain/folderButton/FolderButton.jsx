import AddFolderContainer from "./AddFolderContainer";
import ButtonListContainer from "./ButtonListContainer";
import ButtonListItem from "./ButtonListItem";
import ButtonContainer from "./ButtonContainer";

function FolderButton({
  handleButtonListItemClick,
  folderList,
  clickedButtonId,
  memoizedAddImgSrc,
  memoizedAddImgAlt,
  handleAddFolderModal,
}) {
  return (
    <ButtonContainer>
      <ButtonListContainer>
        <ButtonListItem
          key="0"
          onClick={() => handleButtonListItemClick(0, "전체")}
          isClick={clickedButtonId === 0}
        >
          전체
        </ButtonListItem>
        {folderList?.map((item) => (
          <ButtonListItem
            onClick={() => handleButtonListItemClick(item.id, item.name)}
            isClick={item.id === clickedButtonId}
            key={item.id}
          >
            {item.name}
          </ButtonListItem>
        ))}
      </ButtonListContainer>
      <AddFolderContainer onClick={() => handleAddFolderModal()}>
        <span>폴더 추가</span>
        <img src={memoizedAddImgSrc} alt={memoizedAddImgAlt} />
      </AddFolderContainer>
    </ButtonContainer>
  );
}

export default FolderButton;
