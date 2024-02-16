import { useEffect, useState } from "react";
import "../styles/folderMenu.css";
import { getFolderName } from "../APIs/FolderPageApi";
import { Button } from "./Button";

export function FolderMenu({ folderNames, onMenuChange }) {
  const sendMenu = (e) => {
    const newMenu = e.target.textContent;
    onMenuChange(newMenu);
  };
  console.log(folderNames);
  return (
    <>
      <div className="folderMenu">
        <div>
          {folderNames &&
            folderNames.length &&
            folderNames.map((folderName) => (
              <Button
                folderName={folderName.name}
                key={folderName.id}
                onClick={sendMenu}
              ></Button>
            ))}
        </div>

        <div className="add">폴더 추가 +</div>
      </div>
    </>
  );
}
