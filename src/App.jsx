import {
  Router,
  Routes,
  Route,
} from "../node_modules/react-router-dom/dist/index";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

// 링크 공유 페이지(SharedPage) url path는 ‘/shared’
// 폴더 페이지(FolderPage) url path는 ‘/folder’
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
