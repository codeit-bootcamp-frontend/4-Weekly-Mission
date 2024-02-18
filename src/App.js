import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getUser, getFolder } from "./api/api";
import "./global.css";
import Layout from "./components/Layout/Layout";
import FolderInfo from "./components/FolderInfo/FolderInfo";
import SharePage from "./pages/SharePage/SharePage";
import SearchBar from "./components/SearchBar/SearchBar";
import CardList from "./components/Card/CardList/CardList";
import OnlyCard from "./components/Card/OnlyCard/OnlyCard";
import FolderPage from "./pages/FolderPage/FolderPage";
import FolderHeader from "./components/FolderHeader/FolderHeader";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" />
            <Route
              path="/shared"
              element={
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
              }
            />
            <Route
              path="/folder"
              element={
                <FolderPage
                  folderHeader={<FolderHeader />}
                  searchBar={<SearchBar />}
                  cardList={
                    <CardList>
                      {items?.map((item) => (
                        <OnlyCard key={item.id} items={item} {...item} />
                      ))}
                    </CardList>
                  }
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Fragment>
  );
}
export default App;
