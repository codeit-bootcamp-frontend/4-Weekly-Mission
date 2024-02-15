import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedPage from './pages/SharedPage/SharedPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
