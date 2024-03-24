import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { LoginProvider } from './contexts/LoginContext';
import LandingPage from './pages/Landing/LandingPage';
import SharedPage from './pages/Shared/SharedPage';
import FolderPage from './pages/Folder/FolderPage';

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="shared" element={<SharedPage />} />
            <Route path="folder" element={<FolderPage />} />
          </Route>
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
