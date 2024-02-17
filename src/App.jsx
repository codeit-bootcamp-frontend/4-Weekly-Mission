import {
  Router,
  Routes,
  Route,
} from "../node_modules/react-router-dom/dist/index";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

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
