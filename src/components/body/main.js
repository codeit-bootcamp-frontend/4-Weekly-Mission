import { useEffect, useState } from "react";
import { getUserData } from "./api";
import TopContainer from "./topContainer";
import "../landing.css";
import Container from "./content";

const Main = () => {
  const [myName, setMyName] = useState(null);
  const [myFolderName, setMyForderName] = useState(null);
  const [myProfileImg, setMyProfileImg] = useState(null);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const whoAmI = await getUserData(`/api/sample/folder`);
        setMyName(whoAmI.folder.owner.name);
        setMyForderName(whoAmI.folder.name);
        setMyProfileImg(whoAmI.folder.owner.profileImageSource);
        setFolders(whoAmI.folder.links);
        console.log(whoAmI.folder.links);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <TopContainer
        myName={myName}
        myFolderName={myFolderName}
        myProfileImg={myProfileImg}
      />
      <Container folders={folders} />
    </>
  );
};

export default Main;
