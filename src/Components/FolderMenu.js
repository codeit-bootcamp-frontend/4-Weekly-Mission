import "../styles/folderMenu.css";
import { useFolderNames } from "../useHooks/useFolderNames";
import { Button } from "./Button";
import { useShowModal } from "../useHooks/useShowModal";
import ModalAddFolder from "./Modal/ModalAddFolder";

export function FolderMenu({ onMenuChange }) {
  const { folderNames } = useFolderNames();
  const { handleShowModal, showModal, setShowModal } = useShowModal();

  const sendMenu = (e, id) => {
    const newMenu = e.target.textContent;
    onMenuChange(newMenu, id);
  };

  return (
    <>
      <div className="folderMenu">
        <div>
          <Button folderName={"전체"} onClick={sendMenu}></Button>
          {folderNames &&
            folderNames.length &&
            folderNames.map(({ name, id }) => (
              <Button
                folderName={name}
                key={id}
                onClick={(e) => sendMenu(e, id)}
              ></Button>
            ))}
        </div>

        <button className="add" onClick={handleShowModal}>
          폴더 추가 +
        </button>
        {showModal && (
          <ModalAddFolder
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            selectedFolderName={"내용 입력"}
          />
        )}
      </div>
    </>
  );
}
