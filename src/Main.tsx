import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shared" element={<Shared />} />
        <Route path="folder" element={<Folder />} />
      </Routes>
    </Router>
  );
}

export default Main;
