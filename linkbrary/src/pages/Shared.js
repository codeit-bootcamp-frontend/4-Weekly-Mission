import "../global.css";
import { useEffect, useState } from "react";
import { getAPI } from "../APIUtil";
import Header from "../components/NavBottom/Header";
import Footer from "../components/NavBottom/Footer";
import Profile from "../components/Profile";
import SharedContents from "../components/SharedContents";

function Shared() {
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
      <Profile folder={contentName} user={userName} proImg={profileImage} />
      <SharedContents folderList={contentList} />
      <Footer />
    </>
  );
}

export default Shared;
