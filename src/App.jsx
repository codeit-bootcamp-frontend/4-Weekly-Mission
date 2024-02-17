import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { LoginProvider } from './contexts/LoginContext';
import LandingPage from './pages/Landing/LandingPage';
import SharedPage from './pages/Shared/SharedPage';

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="shared" element={<SharedPage />} />
          </Route>
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
