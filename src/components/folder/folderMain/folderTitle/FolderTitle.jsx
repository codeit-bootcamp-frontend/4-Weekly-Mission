import Delete from "./Delete";
import EditName from "./EditName";
import FunctionContainer from "./FunctionContainer";
import Share from "./Share";
import Title from "./Title";
import TitleContainer from "./TitleContainer";
import shareImg from "../../../../assets/img/png/share.png";
import editNameImg from "../../../../assets/img/png/pen.png";
import deleteImg from "../../../../assets/img/png/delete.png";
function FolderTitle({
  folderTitleName,
  isSelectedAll,
  handleEditFolder,
  handleDeleteFolder,
  handleShare,
}) {
  return (
    <TitleContainer>
      <Title>{folderTitleName}</Title>
      {isSelectedAll || (
        <FunctionContainer>
          <Share onClick={() => handleShare()}>
            <img src={shareImg} alt="shareImg" />
            <span>공유</span>
          </Share>
          <EditName onClick={() => handleEditFolder()}>
            <img src={editNameImg} alt="editNameImg" />
            <span>이름변경</span>
          </EditName>
          <Delete onClick={() => handleDeleteFolder()}>
            <img src={deleteImg} alt="deleteImg" />
            <span>삭제</span>
          </Delete>
        </FunctionContainer>
      )}
    </TitleContainer>
  );
}

export default FolderTitle;
