import { Fragment, useState, useEffect } from "react";
import { getUser, getFolder } from "./api/api";
import "./global.css";
import Layout from "./components/Layout/Layout";
import FolderInfo from "./components/FolderInfo/FolderInfo";
import SharePage from "./pages/SharePage/SharePage";
import SearchBar from "./components/SearchBar/SearchBar";
import CardList from "./components/CardUi/CardList/CardList";
import OnlyCard from "./components/CardUi/OnlyCard/OnlyCard";

function App() {
  const [userProfile, setUserProfile] = useState();
  const [profile, setProfile] = useState();
  const [folderName, setFolderName] = useState();
  const [items, setitems] = useState([]);

  const handleLoad = async () => {
    const userData = await getUser();
    const { folder } = await getFolder();
    setUserProfile(userData);
    setProfile(folder.owner);
    setFolderName(folder.name);
    setitems(folder.links);
  };
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <Fragment>
      <Layout userProfile={userProfile}>
        <SharePage
          folderInfo={<FolderInfo profile={profile} folderName={folderName} />}
          searchBar={<SearchBar />}
          cardList={
            <CardList>
              {items?.map((items) => (
                <OnlyCard key={items?.id} items={items} {...items} />
              ))}
            </CardList>
          }
        />
      </Layout>
    </Fragment>
  );
}
export default App;
