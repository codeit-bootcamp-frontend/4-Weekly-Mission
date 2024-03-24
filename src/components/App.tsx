import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Shared from "../pages/shared";
import Folder from "../pages/folder";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
