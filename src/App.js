import { Fragment, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { getFolder } from "./api/api";

import "./global.css";
import FolderInfo from "./components/FolderInfo/FolderInfo";
import SharePage from "./pages/SharePage/SharePage";
import SearchBar from "./components/SearchBar/SearchBar";
import CardList from "./components/Card/CardList/CardList";
import OnlyCard from "./components/Card/OnlyCard/OnlyCard";
import FolderPage from "./pages/FolderPage/FolderPage";
import FolderHeader from "./components/Folder/FolderHeader/FolderHeader";

function App() {
  const [folderData, setFolderData] = useState();
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const { folder } = await getFolder();
    setFolderData(folder);
    setItems(folder.links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <Fragment>
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
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
