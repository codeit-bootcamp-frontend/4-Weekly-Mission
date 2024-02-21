import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import "./global.css";
import { FolderInfo } from "./ui/FolderInfo";
import { SearchBar } from "./ui/SearchBar";
import { CardList } from "./ui/CardList";
import { useGetFolder } from "data-access/useGetFolder";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FolderPage } from "page-layout/FolderPage/FolderPage";
import { AddLinkBar } from "ui/AddLinkBar/AddLinkBar";
import { getFolders } from "data-access/getFolders";
import { useEffect, useState } from "react";
import { FolderContent } from "ui/FolderContent/FolderContent";
import { Button } from "./StyledComponents/Buttons";

function App() {
  const [folders, setFolders] = useState();

  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  const handleLoadFolders = async () => {
    const { data } = await getFolders();
    setFolders(data);
  };

  useEffect(() => {
    handleLoadFolders();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Link to="/shared">
                  {" "}
                  <Button>shared</Button>
                </Link>
                <Link to="/folder">
                  {" "}
                  <Button>folder</Button>
                </Link>
              </div>
            }
          />
          <Route
            path="/shared"
            element={
              <SharedPage
                folderInfo={
                  <FolderInfo
                    profileImage={profileImage}
                    ownerName={ownerName}
                    folderName={folderName}
                  />
                }
                searchBar={<SearchBar />}
                cardList={
                  <CardList>
                    {folders?.map((link) => (
                      <ReadOnlyCard key={link?.id} {...link} />
                    ))}
                  </CardList>
                }
              />
            }
          />
          <Route
            path="folder"
            element={
              <FolderPage
                addLink={<AddLinkBar />}
                searchBar={<SearchBar />}
                content={<FolderContent />}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
