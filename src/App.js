import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShareLayout } from "./layout/ShareLayout";
import { FolderLayout } from "./layout/FolderLayout";
import "./global.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Link to="/folder">Folder 이동</Link>
                <Link to="/share">Share 이동</Link>
              </div>
            }
          />
          <Route path="/share" element={<ShareLayout />} />
          <Route path="/folder" element={<FolderLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
