import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shared from './pages/shared/Shared';
import Folder from './pages/folder/Folder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
