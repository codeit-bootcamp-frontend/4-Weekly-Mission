import { useModal } from "../../../../hooks/useModal";
import styles from "./styles.module.css";
import { AddModal, ModalPortal } from "../../../../components";
import { Folder } from "../../../../types";

interface Props {
  folders: Folder[];
  selectedId: number | null;
  onSelectedFolder: ({ name, id }: { name: string; id: number }) => void;
}

export function FolderCategory({
  folders,
  selectedId,
  onSelectedFolder,
}: Props) {
  const { openModal, modalRef, handleModalClose, handleModalOpen } = useModal();

  const handleFolderSelectClick = (e: React.MouseEvent) => {
    onSelectedFolder({
      name: (e.target as HTMLElement).textContent as string,
      id: (e.target as HTMLElement).id as unknown as number,
    });
  };

  const handleFolderAddClick = (e: React.MouseEvent) => {
    handleModalOpen();
  };

  return (
    <>
      <ModalPortal>
        <AddModal
          ref={modalRef}
          openModal={openModal}
          handleModalClose={handleModalClose}
        />
      </ModalPortal>
      <div className={styles.container}>
        <div className={styles.tags}>
          <span
            className={`${styles.tag} ${!selectedId ? styles.selected : ""}`}
            onClick={handleFolderSelectClick}
          >
            전체
          </span>
          {folders.map((folder) => (
            <span
              className={`${styles.tag} ${
                folder.id == (selectedId as unknown as string)
                  ? styles.selected
                  : ""
              }`}
              key={folder.id}
              id={folder.id}
              onClick={handleFolderSelectClick}
            >
              {folder.name}
            </span>
          ))}
        </div>
        <span className={styles.folderAddBtn} onClick={handleFolderAddClick}>
          폴더 추가+
        </span>
      </div>
    </>
  );
}
