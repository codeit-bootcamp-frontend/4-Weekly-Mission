import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import AppFrame from "./pages/AppFrame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppFrame />}>
          <Route index element={<Navigate to="/shared" />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
