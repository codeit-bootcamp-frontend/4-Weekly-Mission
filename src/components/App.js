import '../assets/common/common.css';
import Footer from './common/Footer';
import Shared from '../pages/shared/Shared';
import Folder from '../pages/folder/Folder';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <div id='wrap'>
        <Routes>
          <Route path="/" element={<div>main</div>}/>
          <Route path="/folder" element={<Folder/>}/>
          <Route path="/shared" element={<Shared/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
