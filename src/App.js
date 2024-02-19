import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalFolder from "./components/PersonalFolder/SharedPage";
import NewPage from "./components/NewPage/NewPage";
import FolderPage from "./components/PersonalFolder/FolderPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/shared" element={<PersonalFolder />} />
          <Route path="/newPage" element={<NewPage />} />
          <Route path="/folder" element={<FolderPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
