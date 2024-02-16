import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="folder" element={<FolderPage />} />
          <Route path="/" element={<SharedPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
