import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import folder from './pages/folder';
import shared from './pages/shared';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/shared" element={<shared />} />
          <Route path="/folder" element={<folder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
