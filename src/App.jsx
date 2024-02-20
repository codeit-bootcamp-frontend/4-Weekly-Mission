import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/common/layout/Layout';
import Shared from './pages/shared';
import Folder from './pages/folder';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/shared" element={<Shared />}></Route>
          <Route path="/folder" element={<Folder />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
