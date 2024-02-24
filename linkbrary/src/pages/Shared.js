import "../global.css";
import { useEffect, useState } from "react";
import { getAPI } from "../APIUtil";
import Header from "../components/NavBottom/Header";
import Footer from "../components/NavBottom/Footer";
import Profile from "../components/Profile";
import Contents from "../components/Contents";
import Search from "../components/Search";

function Shared() {
  const [contentName, setContentName] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  const handleLoad = async () => {
    const {
      folder: { name, owner, links },
    } = await getAPI("/sample/folder");
    const user = await getAPI("/sample/user");

    setContentName(name);
    setUserName(owner.name);
    setProfileImage(owner.profileImageSource);
    setData(links);
    setUser(user);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Header user={user} />
      <Profile folder={contentName} user={userName} proImg={profileImage} />
      <Search />
      <Contents items={data} />
      <Footer />
    </>
  );
}

export default Shared;
