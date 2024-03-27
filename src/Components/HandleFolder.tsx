import shareIcon from "../images/sharewindow.svg";
import changeIcon from "../images/change.svg";
import deleteIcon from "../images/delete.svg";
import "../styles/handleFolder.css";
import ModalEdit from "./Modal/ModalEdit";
import { useShowModal } from "../useHooks/useShowModal";
import ModalShare from "./Modal/ModalShare";
import ModalDeleteFolder from "./Modal/ModalDeleteFolder";
import { useFolder } from "../useHooks/useFolder";

interface Props {
  id: number;
}
export function HandleFolder({ id }: Props) {
  const { handleShowModal, showModal, setShowModal, clickValue } =
    useShowModal();
  const { currentMenu } = useFolder();

  return (
    <>
      <div className="handle">
        <button className="icon" onClick={handleShowModal}>
          <img src={shareIcon} alt="공유 아이콘" />
          공유
        </button>
        <button className="icon" onClick={handleShowModal}>
          <img src={changeIcon} alt="이름변경 아이콘" />
          이름 변경
        </button>
        <button className="icon" onClick={handleShowModal}>
          <img src={deleteIcon} alt="삭제 아이콘" />
          삭제
        </button>
      </div>
      {showModal && clickValue === "공유" ? (
        <ModalShare
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          currentMenu={currentMenu}
          currentFolderId={id}
        />
      ) : showModal && clickValue === "이름 변경" ? (
        <ModalEdit
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          selectedFolderName={"유용한 팁"}
        />
      ) : (
        <ModalDeleteFolder
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          currentMenu={currentMenu}
        />
      )}
    </>
  );
}
