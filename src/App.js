import { BrowserRouter, Routes, Route } from "react-router-dom";
import Folder from "./pages/folder";
import Shared from "./pages/shared";
import Main from "./pages/main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/share" element={<Shared />} />
          <Route path="/folder" element={<Folder />}>
            <Route path=":folderId" element={<Folder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
