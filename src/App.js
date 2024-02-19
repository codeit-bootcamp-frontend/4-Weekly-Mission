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
import { GetAllFolderLinks } from 'data-access/GetAllFolderLinks';
import { GetOtherFolderLinks } from 'data-access/GetOtherFolderLinks';  // 추가
import FolderList from 'ui/FolderList/FolderList';
import { useState, useEffect } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState("전체");
  // const [linkData, setLinkData] = useState(null);

  // const allFolderLinks = GetAllFolderLinks();
  // let otherFolderLinks = allFolderLinks;

  // useEffect(() => {
  //   if (isClicked === "전체") {
  //     console.log("o")
  //     setLinkData(allFolderLinks.data.links);
  //   } else {
  //     console.log("x")
  //     otherFolderLinks = GetOtherFolderLinks(isClicked);
  //     setLinkData(otherFolderLinks.data.links);
  //   }
  // }, [isClicked]);
  const linkData = GetAllFolderLinks().data?.links;
  const folderData = useGetFolder().data;

  const handleFolderButtonClick = (folderName) => {
    setIsClicked(folderName);
    console.log(isClicked)
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/shared"
          element={
            <Layout>
              <SharedPage
                folderInfo={<FolderInfo />}
                searchBar={<SearchBar />}
                folderList={<FolderList 
                  folderData={folderData} 
                  isClicked={isClicked}
                  onFolderButtonClick={handleFolderButtonClick} />
                }
                cardList={linkData ? (
                  <CardList>
                    {linkData?.map((link) => (
                      <ReadOnlyCard key={link?.id} {...link} />
                    ))}
                  </CardList>
                ) : (
                  <NoLinks />
                )}
              />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
