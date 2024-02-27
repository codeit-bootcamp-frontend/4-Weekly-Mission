import Folder from "pages/Folder";
import Landing from "pages/Lading";
import Share from "pages/Share";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shared" element={<Share />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
