import { Fragment, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { getFolder } from "./api/api";

import {
  CardList,
  OnlyCard,
  FolderInfo,
  SearchBar,
  FolderHeader,
} from "./components";
import SharePage from "./pages/SharePage/SharePage";
import FolderPage from "./pages/FolderPage/FolderPage";

import "./global.css";

function App() {
  const [folderData, setFolderData] = useState([]);

  const handleLoad = async () => {
    const { folder } = await getFolder();
    setFolderData(folder);
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
                    {folderData.links?.map((item) => (
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
