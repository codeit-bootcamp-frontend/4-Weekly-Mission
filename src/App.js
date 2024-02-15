import { Fragment, useState, useEffect } from "react";
import { getUser, getFolder } from "./api/api";
import "./global.css";
import Layout from "./components/Layout/Layout";
import FolderInfo from "./components/FolderInfo/FolderInfo";
import SharePage from "./pages/SharePage/SharePage";
import SearchBar from "./components/SearchBar/SearchBar";
import CardList from "./components/Card/CardList/CardList";
import OnlyCard from "./components/Card/OnlyCard/OnlyCard";

function App() {
  const [userProfile, setUserProfile] = useState();
  const [folderData, setFolderData] = useState();
  const [items, setitems] = useState([]);

  const handleLoad = async () => {
    const userData = await getUser();
    const { folder } = await getFolder();
    setUserProfile(userData);
    setFolderData(folder);
    setitems(folder.links);
  };
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <Fragment>
      <Layout userProfile={userProfile}>
        <SharePage
          folderInfo={<FolderInfo profile={folderData} />}
          searchBar={<SearchBar />}
          cardList={
            <CardList>
              {items?.map((item) => (
                <OnlyCard key={item.id} items={item} {...item} />
              ))}
            </CardList>
          }
        />
      </Layout>
    </Fragment>
  );
}
export default App;
