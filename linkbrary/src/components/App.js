import { useEffect, useState } from "react";
import { getAPI } from "..api";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import FolderSection from "./FolderSection";

function App() {
  const [contentName, setContentName] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [contentList, setContentList] = useState([]);
  const [user, setUser] = useState(null);

  const handleLoad = async () => {
    const {
      folder: { name, owner, links },
    } = await getAPI("/sample/folder");
    const user = await getAPI("/sample/user");

    setContentName(name);
    setUserName(owner.name);
    setProfileImage(owner.profileImageSource);
    setContentList(links);
    setUser(user);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Header user={user} />
      <Profile
        folderName={contentName}
        userName={userName}
        imgSrc={profileImage}
      />
      <FolderSection folderList={contentList} />
      <Footer />
    </>
  );
}

export default App;
