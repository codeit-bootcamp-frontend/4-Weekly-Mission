import styled from "styled-components";
import shareIcon from "../../images/shareIcon.svg";
import penIcon from "../../images/penIcon.svg";
import deleteIcon from "../../images/deleteIcon.svg";

const FolderOptions = styled.div`
  display: flex;

  img {
    width: 18px;
    height: 18px;
  }
  button {
    background: none;
    border: none;
    color: #9fa6b2;

    display: flex;
    gap: 4px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const FolderOption = ({ selectedFolder }) => {
  return (
    <>
      {selectedFolder.id !== "ALL" && (
        <FolderOptions>
          <button>
            <img src={shareIcon} alt="공유 버튼 이미지" />
            공유
          </button>
          <button>
            <img src={penIcon} alt="이름 변경 버튼 이미지" />
            이름 변경
          </button>
          <button>
            <img src={deleteIcon} alt="삭제 버튼 이미지" />
            삭제
          </button>
        </FolderOptions>
      )}
    </>
  );
};

export default FolderOption;
