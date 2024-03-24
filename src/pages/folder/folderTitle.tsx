import { useRecoilValue } from "recoil";
import { clickFolder } from "../../store/store";
import "./folderTitle.css";
import { ModalItem, ModalProps } from "./type";

function FolderTitle({
  setName,
  setOpenModal,
  setButtonColor,
  setButtonName,
  modalName,
}: ModalProps) {
  const clickedLink = useRecoilValue(clickFolder);
  const handleModalClick = (type: ModalItem) => {
    setOpenModal(true);
    setName(type.name);
    setButtonColor(type.buttonColor);
    setButtonName(type.buttonName);
  };

  return (
    <div className="folderTitleContainer">
      <h2>{clickedLink}</h2>
      {clickedLink === "전체" ? null : (
        <ul>
          <li>
            <button onClick={() => handleModalClick(modalName.share)}>
              <img
                src={`${process.env.PUBLIC_URL}/images/share.svg`}
                alt="공유"
              />
              공유
            </button>
          </li>
          <li>
            <button onClick={() => handleModalClick(modalName.change)}>
              <img
                src={`${process.env.PUBLIC_URL}/images/pen.svg`}
                alt="이름 변경"
              />
              이름 변경
            </button>
          </li>
          <li>
            <button onClick={() => handleModalClick(modalName.delete)}>
              <img
                src={`${process.env.PUBLIC_URL}/images/delete.svg`}
                alt="삭제"
              />
              삭제
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default FolderTitle;
