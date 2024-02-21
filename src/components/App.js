import Folder from '../pages/Folder';
import Shared from '../pages/Shared';
import Main from '../pages/Main';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="folder" element={<Folder />} />
      <Route path="shared" element={<Shared />} />
    </Routes>
  );
}

export default App;
