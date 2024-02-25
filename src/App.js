import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="shared" element={<Shared />} />
        <Route path="folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
