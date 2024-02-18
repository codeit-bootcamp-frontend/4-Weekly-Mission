import './App.css';
import { Route, Routes } from 'react-router-dom';
import Shared from './pages/shared/shared.jsx';

function App() {
  return (
    <Routes>
      <Route path="/shared" element={<Shared />}></Route>
    </Routes>
  );
}

export default App;
