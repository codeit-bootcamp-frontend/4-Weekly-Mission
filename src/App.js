import { Fragment, useState, useEffect } from "react";
import { getUser, getFolder } from "./api/api";
import "./global.css";
import Layout from "./components/Layout/Layout";
import FolderInfo from "./components/FolderInfo/FolderInfo";
import SharePage from "./pages/SharePage/SharePage";

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [profile, setProfile] = useState(null);
  const [folderName, setFolderName] = useState(null);

  const handleLoad = async () => {
    const userData = await getUser();
    const { folder } = await getFolder();
    setUserProfile(userData);
    setProfile(folder.owner);
    setFolderName(folder.name);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <Fragment>
      <Layout userProfile={userProfile}>
        <SharePage
          folderInfo={<FolderInfo profile={profile} folderName={folderName} />}
        />
      </Layout>
    </Fragment>
  );
}
export default App;
