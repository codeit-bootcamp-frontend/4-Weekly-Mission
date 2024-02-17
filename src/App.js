import { Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared.js";
import Landing from "./pages/Landing.js";
import Folder from "./pages/Folder.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </>
  );
}

export default App;
