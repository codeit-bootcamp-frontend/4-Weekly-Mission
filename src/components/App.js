import SharedPage from '../pages/SharedPage';
import MainPage from '../pages/MainPage';
import { Routes, Route } from "react-router-dom";
import FolderPage from '../pages/FolderPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="folder" element={<FolderPage />} />
      <Route path="shared" element={<SharedPage />} />
    </Routes>
  );
}

export default App;
