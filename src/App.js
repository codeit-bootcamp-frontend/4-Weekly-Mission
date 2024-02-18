import { Layout } from './feature/Layout';
import { SharedPage } from './page-layout/SharedPage';
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
      <Layout>
        <Routes>
          <Route
            path='/shared'
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
