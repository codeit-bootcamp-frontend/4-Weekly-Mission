import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharePage from "./pages/share/SharePage.js";
import FolderPage from "./pages/folder/FolderPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharePage />}></Route>
        <Route path="/share" element={<SharePage />}></Route>
        <Route path="/folder" element={<FolderPage />}>
          <Route index element={<FolderPage />}></Route>
          <Route path=":id" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
