import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedPage from './components/SharedPage/SharedPage';
import App from './components/App';
import FolderPage from './components/FolderPage/FolderPage';

const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Main;
