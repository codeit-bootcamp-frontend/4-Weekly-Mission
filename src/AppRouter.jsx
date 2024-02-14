import Main from './Main';
import Home from './pages/Home/Home';

const { Route, Routes, BrowserRouter } = require('react-router-dom');

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
