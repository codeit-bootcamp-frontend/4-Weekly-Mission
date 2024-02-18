import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import "./global.css";
import { FolderInfo } from "./ui/FolderInfo";
import { SearchBar } from "./ui/SearchBar";
import { CardList } from "./ui/CardList";
import { useGetFolder } from "data-access/useGetFolder";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
import { NoLinks } from 'ui/CardList/NoLinks';

function App() {

  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};
  return (
    <Router>
      <Routes>
        <Route
          path="/shared"
          element={
            <Layout>
              <SharedPage
                folderInfo={
                  <FolderInfo profileImage={profileImage} ownerName={ownerName} folderName={folderName} />
                }
                searchBar={<SearchBar />}
                cardList={links ? (
                  <CardList>
                    {links?.map((link) => (
                      <ReadOnlyCard key={link?.id} {...link} />
                    ))}
                  </CardList>
                ) : (
                  <NoLinks />
                )
                }
              />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;