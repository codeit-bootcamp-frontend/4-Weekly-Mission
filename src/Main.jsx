import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedPage from './components/SharedPage';
import App from './components/App';

const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="shared" element={<SharedPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Main;
