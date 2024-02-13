import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main';
import './css/Reset.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
