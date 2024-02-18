import Shared from './pages/Shared';
import Folder from './pages/Folder';
import Main from './pages/Main';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/shared" element={<Shared />} />
            <Route path="/folder" element={<Folder />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
