import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmptyPage from "./EmptyPage";
import SharedPage from "./SharedPage";
import FolderPage from "./FolderPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmptyPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
