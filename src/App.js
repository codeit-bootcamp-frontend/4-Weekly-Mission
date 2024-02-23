import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
