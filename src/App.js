import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShareLayout } from "./layout/ShareLayout";
import { FolderLayout } from "./layout/FolderLayout";
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />} />
        <Route path="/folder" element={<FolderLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
