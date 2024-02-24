import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Main";
import Folder from "../pages/Folder";
import HomaPage from "../pages/HomaPage";
import Shared from "../pages/Shared";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomaPage />} />
          <Route path="shared" element={<Shared />} />
          <Route path="folder" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
