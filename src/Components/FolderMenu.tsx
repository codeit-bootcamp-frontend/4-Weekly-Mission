import "../styles/folderMenu.css";
import { useFolderNames } from "../useHooks/useFolderNames";
import { Button } from "./Button";
import { useShowModal } from "../useHooks/useShowModal";
import ModalAddFolder from "./Modal/ModalAddFolder";

interface Props {
  onMenuChange: (newMenu: string, id?: number) => void;
}
export function FolderMenu({ onMenuChange }: Props) {
  const { folderNames } = useFolderNames();
  const { handleShowModal, showModal, setShowModal } = useShowModal();

  const sendMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id?: number
  ) => {
    const target = e.target as HTMLButtonElement;
    const newMenu = target.textContent;
    if (!newMenu) return;
    onMenuChange(newMenu, id);
  };

  return (
    <>
      <div className="folderMenu">
        <div>
          <Button folderName={"전체"} onClick={(e) => sendMenu(e)}></Button>
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
