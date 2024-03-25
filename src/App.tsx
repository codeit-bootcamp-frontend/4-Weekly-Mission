import "./App.css";
import "./style/global.css";

import { MainPage } from "./page/mainPage";
import { MainLayout } from "./layout/main/mainLayout";
import { FolderPage } from "./page/folderPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shared" element={<MainPage />} />
          <Route path="/folder" element={<FolderPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
