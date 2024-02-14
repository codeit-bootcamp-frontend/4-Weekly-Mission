import App from './components/App';
// import Folder from './components/Folder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/folder" element={<Folder />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
