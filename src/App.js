import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "./components/Pages/SharedPage/index";
import NewPage from "./components/Pages/NewPage/index";
import FolderPage from "./components/Pages/FolderPage/index";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/shared" element={<SharedPage />} />
          <Route path="/newPage" element={<NewPage />} />
          <Route path="/folder" element={<FolderPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
