import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Folder from './pages/Folder/Folder';
import Home from './pages/Home/Home';
import Shared from './pages/Shared/Shared';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/folder' element={<Folder />} />
          <Route path='/shared' element={<Shared />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
