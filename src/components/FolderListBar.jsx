import style from "./FolderListBar.module.css";
import FolderButton from "./FolderButton";
import addImg from "../images/add.svg";
import { useState } from "react";
import FolderOptions from "./FolderOptions";
import { getWholeFolderListData } from "../api/api";

function FolderListBar({ folderList }) {
  const wholeBtn = {
    id: 1,
    created_at: "2023-06-04T20:59:39.293024+00:00",
    name: "전체",
    user_id: 1,
    favorite: true,
    link: {
      count: 0,
    },
  };
  const newFolderList = [wholeBtn, ...folderList];
  const [nowFolderName, setNowFolderName] = useState("");
  const [isClicked, setIsClicked] = useState(0);
  console.log("folderList: ", folderList);

  const changeFolder = (folder) => {
    const folderName = folder && folder.name;
    setNowFolderName(folderName);
    console.log("폴더가 변경되었습니다.", folder);
  };

  return (
    <>
      <div className={style.upperContainer}>
        <div className={style.btnContainer}>
          {newFolderList.map((folder, idx) => (
            <FolderButton
              key={folder.id}
              folder={folder}
              onClick={changeFolder}
              isClicked={idx === isClicked}
              setIsClicked={() => setIsClicked(idx)}
            />
          ))}
        </div>
        <div className={style.addFolderContainer}>
          <div className={style.addFolderText}>폴더 추가</div>
          <img src={addImg} alt="addImg" />
        </div>
      </div>
      <div className={style.folderOptionsContainer}>
        <FolderOptions folderName={nowFolderName} />
      </div>
    </>
  );
}

export default FolderListBar;
