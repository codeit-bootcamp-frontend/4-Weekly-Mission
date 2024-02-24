import { useEffect, useState } from "react";
import { getLinksUserIdFolder } from "../api";
import "../css/FolderList.css";
import add from "../image/add.png";
import wihteadd from "../image/wihteadd.png";
import share from "../image/share.png";
import namechange from "../image/namechange.png";
import deleteimg from "../image/delete.png";
const tools = [
  {
    name: "공유",
    image: share,
    alt: "공유",
  },
  {
    name: "이름 변경",
    image: namechange,
    alt: "이름 변경",
  },
  {
    name: "삭제",
    image: deleteimg,
    alt: "삭제",
  },
];

function FolderList({ onClick }) {
  const [userFolder, setUserFolder] = useState({ data: [] });
  const [selectedFolderName, setSelectedFolderName] = useState("전체");

  useEffect(() => {
    const fetchUserFolder = async () => {
      try {
        const data = await getLinksUserIdFolder();
        setUserFolder(data);
      } catch (error) {}
    };
    fetchUserFolder();
  }, []);

  const handleItemClick = (folderName, foderId) => () => {
    setSelectedFolderName(folderName);
    onClick(foderId);
  };

  return (
    <>
      {userFolder.data.length > 0 ? (
        <section>
          <div className="foldercategory">
            <ul className="folderlist">
              <li
                className={
                  selectedFolderName === "전체"
                    ? "folderbasicitem selected"
                    : "folderbasicitem"
                }
                onClick={handleItemClick("전체", "")}
              >
                전체
              </li>
              {userFolder.data.map((folder) => (
                <li
                  className={
                    selectedFolderName === folder.name
                      ? "folderitem selected"
                      : "folderitem"
                  }
                  key={folder.id}
                  onClick={handleItemClick(folder.name, folder.id)}
                >
                  {folder.name}
                </li>
              ))}
              <div className="folderadd">
                <p>폴더 추가</p>
                <img className="addbtn" src={add} alt="폴더추가" />
              </div>
            </ul>
          </div>
          <div className="title-tools">
            <h1 className="usertitle">{selectedFolderName}</h1>
            {selectedFolderName !== "전체" && (
              <>
                <div className="tools">
                  {tools.map((tool) => (
                    <div className="tool" key={tool.name}>
                      <span>{tool.name}</span>
                      <img src={tool.image} alt={tool.alt} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="floatingactionbtn">
            <p>폴더 추가</p>
            <img
              className="floatingactionbtn-img"
              src={wihteadd}
              alt="폴더추가"
            />
          </div>
        </section>
      ) : (
        <p className="no-links">저장된 링크가 없습니다.</p>
      )}
    </>
  );
}

export default FolderList;
