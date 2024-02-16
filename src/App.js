import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Folder from "./pages/Folder";
import Shared from "./pages/Shared";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="folder" element={<Folder />} />
      <Route path="shared" element={<Shared />} />
    </Routes>
  );
}

export default App;
