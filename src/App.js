import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/shared";
import Folder from "./pages/folder";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
