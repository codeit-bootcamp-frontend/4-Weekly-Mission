import "./MainPage.css";
import MainPageHeader from "../../components/Header/MainPageHeader";
import MainPageFooter from "../../components/Footer/MainPageFooter";
import UserMainProfile from "./UserMainProfile";
import SearchBar from "../../components/SearchBar";
import Cards from "./Cards";
import { getSampleUser, getSampleFolder } from "../../apis/getSampleData";
import { useEffect } from "react";
import { useState } from "react";

export default function MainPage() {
  const [user, setUser] = useState({});
  const [folder, setFolder] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  const getData = async () => {
    try {
      const sampleUser = await getSampleUser();
      setUser(await getSampleUser());
      setFolder((await getSampleFolder()).folder);
    } catch (error) {
      console.error(error);
    } finally {
      user ? setIsLogin(true) : setIsLogin(false);
      console.log("isLogin" + isLogin);
    }
    console.log(user.id);
  };

  useEffect(() => {
    getData();
  }, [user.id]);

  return (
    <div className="container">
      <MainPageHeader user={user} isLogin={isLogin} />
      <UserMainProfile user={user} folder={folder} />
      <div className="main-container">
        <SearchBar />
        <Cards links={folder.links} />
      </div>
      <MainPageFooter />
    </div>
  );
}
