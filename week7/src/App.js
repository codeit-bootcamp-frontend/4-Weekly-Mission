import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmptyPage from "./EmptyPage.js";
import SharedPage from "./SharedPage.js";
import FolderPage from "./FolderPage.js";
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
