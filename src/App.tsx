import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Lading";
import Share from "./pages/Share";
import Folder from "./pages/Folder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/share" element={<Share />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
