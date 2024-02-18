import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './components/pages/shared';
import Folder from './components/pages/folder';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>홈페이지</div>;
}

export default App;
