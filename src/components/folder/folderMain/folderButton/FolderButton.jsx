import AddFolderContainer from "./AddFolderContainer";
import ButtonListContainer from "./ButtonListContainer";
import ButtonListItem from "./ButtonListItem";
import ButtonContainer from "./ButtonContainer";
<<<<<<< HEAD
=======
import { MODAL_TYPE } from "../../../../util/commonText";
>>>>>>> part2-김수환-week13

function FolderButton({
  handleButtonListItemClick,
  folderList,
  clickedButtonId,
  memoizedAddImgSrc,
  memoizedAddImgAlt,
<<<<<<< HEAD
  handleAddFolderModal,
=======
  onModal,
>>>>>>> part2-김수환-week13
}) {
  return (
    <ButtonContainer>
      <ButtonListContainer>
        <ButtonListItem
          key="0"
          onClick={() => handleButtonListItemClick(0, "전체")}
<<<<<<< HEAD
          isClick={clickedButtonId === 0}
=======
          $selected={clickedButtonId === 0}
>>>>>>> part2-김수환-week13
        >
          전체
        </ButtonListItem>
        {folderList?.map((item) => (
          <ButtonListItem
            onClick={() => handleButtonListItemClick(item.id, item.name)}
<<<<<<< HEAD
            isClick={item.id === clickedButtonId}
=======
            $selected={item.id === clickedButtonId}
>>>>>>> part2-김수환-week13
            key={item.id}
          >
            {item.name}
          </ButtonListItem>
        ))}
      </ButtonListContainer>
<<<<<<< HEAD
      <AddFolderContainer onClick={() => handleAddFolderModal()}>
=======
      <AddFolderContainer onClick={() => onModal(MODAL_TYPE.addFolder)}>
>>>>>>> part2-김수환-week13
        <span>폴더 추가</span>
        <img src={memoizedAddImgSrc} alt={memoizedAddImgAlt} />
      </AddFolderContainer>
    </ButtonContainer>
  );
}

export default FolderButton;
