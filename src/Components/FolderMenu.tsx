import React from "react";
import { Button } from "./Button";
import "../Styles/FolderMenu.css";
import useModalOpen from "../Hooks/useModalOpen";
import ModalAddFolder from "./Modal/ModalAddFolder";

interface Folder {
  name: string;
  id: string;
}

interface FolderMenuProps {
  folderNames: Folder[];
  onMenuChange: (newMenu: string | null, id: string) => void;
}

export function FolderMenu({ folderNames, onMenuChange }: FolderMenuProps) {
  const sendMenu = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    const newMenu = (e.target as HTMLButtonElement).textContent;
    onMenuChange(newMenu, id);
  };

  const { handleModalOpen, isOpen, setIsOpen } = useModalOpen();

  return (
    <>
      <div className="folderMenu">
        <div>
          <Button folderName={"전체"} id="all" onClick={sendMenu}></Button>
          {folderNames &&
            folderNames.length &&
            folderNames.map(({ name, id }) => (
              <Button
                folderName={name}
                key={id}
                onClick={(e) => sendMenu(e, id)}
                id={id}
              ></Button>
            ))}
        </div>

        <div className="addFolder" onClick={handleModalOpen}>
          폴더 추가 +
        </div>
        {isOpen && (
          <ModalAddFolder isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
}
