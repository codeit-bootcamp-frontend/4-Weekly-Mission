import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SharedPage from './pages/SharedPage/SharedPage';
import FolderPage from './pages/FolderPage/FolderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
