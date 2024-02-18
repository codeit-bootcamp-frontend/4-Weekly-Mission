import { Button } from "./Button";

export function FolderMenu({ folderNames, onMenuChange }) {
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

        <div className="add">폴더 추가 +</div>
      </div>
    </>
  );
}
