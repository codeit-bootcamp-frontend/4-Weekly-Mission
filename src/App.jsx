import { Route, Routes } from'react-router-dom';

import SharedPage from './pages/SharedPage';
import './App.css';

const App = () => {

  return (
    <div className='container'>
      <Routes>
        <Route path="shared" element={<SharedPage />} />
      </Routes>
    </div>
  )
}

export default App;