import Header from "../components/sharing/Header";
import Footer from "../components/sharing/Footer";
import { useEffect, useState } from "react";
import { getFolders, getLinks, getUser } from "../utils/api";
import AddLinkForm from "../components/folder/ui-input/AddLinkForm";
import SearchInputForm from "../components/folder/ui-input/SearchInputForm";
import NoLink from "./NoLink";
import TagList from "../components/folder/ui-tag/TagList";
import ActionIconList from "../components/folder/ui-actionIcon/ActionIconList";
import CardList from "../components/folder/ui-card/CardList";
import FolderHeaderLayout from "../components/folder/ui-layout/FolderHeaderLayout";
import MainLayout from "../components/folder/ui-layout/MainLayout";
import AddFolderButton from "../components/folder/ui-button/AddFolderButton";
import Modal from "../components/sharing/ui-modal/Modal";

const Folder = () => {
  const [user, setUser] = useState({
    email: null,
    image_source: null,
  });
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState({ id: 1, name: "전체" });
  const [currentLinks, setCurrentLinks] = useState([]);

  const loadUser = async () => {
    const userInfo = await getUser();
    if (!userInfo) return;
    setUser(userInfo["data"][0]);
  };

  const loadFolders = async () => {
    const folderInfo = await getFolders();
    if (!folderInfo) return;
    setFolders(folderInfo["data"]);
  };

  const loadLinks = async () => {
    const links = await getLinks(currentFolder.id);
    setCurrentLinks(links["data"]);
  };

  const handleClickTag = (id, name) => {
    setCurrentFolder({ id, name });
  };

  useEffect(() => {
    loadUser();
    loadFolders();
    loadLinks();
  }, [currentFolder]);

  return (
    <>
      <Header userInfo={user} fixed={false} />
      <div>
        <FolderHeaderLayout>
          <AddLinkForm />
        </FolderHeaderLayout>
        <MainLayout>
          <SearchInputForm />
          <Modal />
          {folders.length === 0 ? (
            // 폴더 리스트가 존재하지 않을 경우
            <NoLink />
          ) : (
            <>
              <div className="space-between">
                <TagList
                  folders={folders}
                  onClick={handleClickTag}
                  currentFolder={currentFolder}
                />
                <AddFolderButton>폴더 추가 +</AddFolderButton>
              </div>

              {currentLinks.length === 0 ? (
                // 현재 폴더 내 링크가 없을 경우
                <NoLink />
              ) : (
                <>
                  <div className="space-between">
                    <span className="font-24px font-regular">
                      {currentFolder.name}
                    </span>
                    {currentFolder.id !== 1 && <ActionIconList />}
                  </div>
                  <CardList currentLinks={currentLinks} />
                </>
              )}
            </>
          )}
        </MainLayout>
      </div>
      <Footer />
    </>
  );
};

export default Folder;
