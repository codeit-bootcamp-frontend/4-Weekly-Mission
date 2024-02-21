import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SearchBar, FolderHeader } from "./components";
import SharePage from "./pages/SharePage/SharePage";
import FolderPage from "./pages/FolderPage/FolderPage";

import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/shared" element={<SharePage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
