import { useEffect, useState } from "react";
import AddLinkInput from "../components/AddLinkInput";
import Gnb from "../components/Gnb";
import LinkSearch from "../components/LinkSearch";
import Footer from "../components/Footer";
import { getUsersFolder, getUser } from "../components/Api";
import FolderItem from "../components/FolderItem";

function FolderPage() {
  // Gnb
  const [userData, setUserData] = useState({ email: "", img: "" });
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await getUser();
        setUserData({ email: user.email, img: user.profileImageSource });
        setIsUserDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  // FloderItem
  const [state, setState] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const body = await getUsersFolder();
        setState(body.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Gnb userData={userData} isUserDataLoaded={isUserDataLoaded} />
      <AddLinkInput />
      <LinkSearch />
      <FolderItem usersFolderData={state} />
      <Footer />
    </>
  );
}

export default FolderPage;
