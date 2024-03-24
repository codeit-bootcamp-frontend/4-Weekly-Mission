import { Route, Routes } from "react-router-dom";
import Shared from "./pages/shared/Shared";
import Folder from "./pages/folder/Folder";

function App() {
  return (
    <Routes>
      <Route path="/shared" element={<Shared />} />
      <Route path="/folder" element={<Folder />}>
        <Route path=":folderId" element={<Folder />} />
      </Route>
    </Routes>
  );
}

export default App;
