import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import FolderPage from "./page-layout/FolderPage";
import { FolderInfo } from "./ui/FolderInfo";
import { SearchBar } from "./ui/SearchBar";
import { AddBar } from "./ui/AddBar";
import { CardList } from "./ui/CardList";
import { useGetFolder } from "data-access/useGetFolder";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
import "./global.css";

function App() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Router>
      <Routes>
        {/* 루트 경로 ("/")에 대한 라우트, 비어있는 페이지 렌더링 */}
        <Route path="/" element={<div>이 페이지는 비어있어요</div>} />

        {/* 기타 경로들에 대한 라우트 */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                {/* "/shared" 경로에 대한 라우트 */}
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

                {/* "/folder" 경로에 대한 라우트 */}
                <Route
                  path="/folder"
                  element={
                    <FolderPage
                      AddBar={<AddBar />}
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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
