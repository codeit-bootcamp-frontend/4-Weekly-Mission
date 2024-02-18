import { Layout } from './feature/Layout';
import { SharedPage } from './page-layout/SharedPage';
import { FolderPage } from './page-layout/FolderPage';
import './global.css';
import { FolderInfo } from './ui/FolderInfo';
import { SearchBar } from './ui/SearchBar';
import { CardList } from './ui/CardList';
import { useGetFolder } from 'data-access/useGetFolder';
import { ReadOnlyCard } from 'ui/ReadOnlyCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="shared"
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
