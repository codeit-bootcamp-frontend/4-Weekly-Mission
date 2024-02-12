import { useEffect, useState } from "react";
import { getAPI } from "..api";
import Header from "./Header";
import Main from "./Main";
import FolderSection from "./FolderSection";
import Footer from "./Footer";

function App() {
  const [folderName, setFolderName] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [folderList, setFolderList] = useState([]);
  const [user, setUser] = useState(null);

  const handleLoad = async () => {
    const {
      folder: { name, owner, links },
    } = await getAPI("/sample/folder");
    const user = await getAPI("/sample/user");

    setFolderName(name);
    setUserName(owner.name);
    setProfileImage(owner.profileImageSource);
    setFolderList(links);
    setUser(user);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Header user={user} />
      <Main folderName={folderName} userName={userName} imgSrc={profileImage} />
      <FolderSection folderList={folderList} />
      <Footer />
    </>
  );
}

export default App;
