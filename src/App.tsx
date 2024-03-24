import { Routes, Route, BrowserRouter } from "react-router-dom";
import SharePage from "./pages/SharePage";
import FolderPage from "./pages/FolderPage";

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
