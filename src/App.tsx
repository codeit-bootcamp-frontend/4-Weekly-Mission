import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "./components/Pages/SharedPage/index";
import FolderPage from "./components/Pages/FolderPage/index";
import ExampleModal from "./components/Modal/example";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/shared" element={<SharedPage />} />
          <Route path="/folder" element={<FolderPage />} />
          <Route path="/examplemodal" element={<ExampleModal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
