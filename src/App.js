import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shared from './pages/Shared/Shared';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shared />} />
      </Routes>
    </Router>
  );
}

export default App;
