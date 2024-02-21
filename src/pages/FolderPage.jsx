import { useEffect, useState } from "react";
import shareImg from "../assets/images/share.png";
import penImg from "../assets/images/pen.png";
import trashCanImg from "../assets/images/trashCan.png";
import addImg from "../assets/images/addPurple.png";
import "./FolderPage.css";
import { getMyFolderList, getMyFolder } from "../api";
import { useUser } from "../context/UserContext";
import { Hero, AddLink, SearchBar, CardList } from "../components/common";

function FolderPage() {
  const [folderList, setFolderList] = useState({});
  const [currentFolder, setCurrentFolder] = useState();
  const [folder, setFolder] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const user = useUser();

  const handleFolderClick = (folder) => {
    if (!folder) {
      setCurrentFolder();
      return;
    }

    if (folder?.id !== currentFolder?.id) {
      setCurrentFolder({ ...folder });
      return;
    }
  };

  useEffect(() => {
    const fetchMyFolderList = async () => {
      try {
        const folders = await getMyFolderList(user?.id);
        setFolderList(folders);
      } catch (error) {
        alert(error);
      }
    };

    fetchMyFolderList();
  }, [user]);

  useEffect(() => {
    const fetchMyFolder = async () => {
      try {
        const links = await getMyFolder(user?.id, currentFolder?.id);
        setFolder(links);
      } catch (error) {
        alert(error);
      }
    };

    fetchMyFolder();
  }, [user, currentFolder]);

  useEffect(() => {
    const isMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      }

      if (window.innerWidth > 768) {
        setIsMobile(false);
      }
    };

    isMobile();
    window.addEventListener("resize", isMobile);

    return () => {
      window.removeEventListener("resize", isMobile);
    };
  }, []);

  return (
    <main className="FolderPage">
      <Hero>
        <div className="FolderPage-addLinkContainer">
          <AddLink className="FolderPage-AddLink" />
        </div>
      </Hero>

      <div className="container FolderPage-cardsContainer">
        <SearchBar className="FolderPage-SearchBar" />

        <div className="FolderPage-folderList flex items-center justify-between">
          <div className="FolderPage-folders flex items-center">
            <button
              className={`FolderPage-folder ${
                currentFolder || "selectedFolder"
              }`}
              onClick={() => handleFolderClick()}
            >
              전체
            </button>
            {folderList?.data &&
              folderList?.data.map((folder) => {
                return (
                  <button
                    className={`FolderPage-folder ${
                      folder?.id === currentFolder?.id && "selectedFolder"
                    }`}
                    onClick={() => handleFolderClick(folder)}
                  >
                    {folder.name}
                  </button>
                );
              })}
          </div>
          {!isMobile && (
            <div className="FolderPage-folderAdd flex items-center">
              폴더 추가
              <img src={addImg} />
            </div>
          )}
        </div>

        <div className="FolderPage-folderName flex-col">
          <h2>{currentFolder ? currentFolder?.name : "전체"}</h2>
          <div className="FolderPage-edit flex items-center">
            <div className="flex items-center">
              <img src={shareImg} />
              공유
            </div>
            <div className="flex items-center">
              <img src={penImg} />
              이름 변경
            </div>
            <div className="flex items-center">
              <img src={trashCanImg} />
              삭제
            </div>
          </div>
        </div>

        <CardList folder={folder?.data} isMobile={isMobile} />
      </div>
    </main>
  );
}

export default FolderPage;
