import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import "./global.css";
import { FolderInfo } from "./ui/FolderInfo";
import { SearchBar } from "./ui/SearchBar";
import { CardList } from "./ui/CardList";
import { useGetFolder } from "data-access/useGetFolder";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FolderPage } from "page-layout/FolderPage/FolderPage";
import { Classification } from "ui/Classification/Classification";
import { AddLinkBar } from "ui/AddLinkBar/AddLinkBar";
import { SharedPossibleCard } from "ui/SharedPossibleCard";
import { useGetCategory } from "data-access/useCategory";

function App() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  const { CategoryData } = useGetCategory();
  console.log(CategoryData);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
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
                    {links?.map((link) => (
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
                cardList={
                  <CardList>
                    {links?.map((link) => (
                      <SharedPossibleCard key={link?.id} {...link} />
                    ))}
                  </CardList>
                }
                classification={<Classification />}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

{
}

export default App;
