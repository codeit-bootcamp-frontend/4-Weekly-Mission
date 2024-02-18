import Folder from "pages/Shared";
import Shared from "pages/Shared";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
