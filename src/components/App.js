import '../assets/common/common.css';
import Footer from './common/Footer';
import Shared from '../pages/shared/Shared';
import Folder from '../pages/folder/Folder';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <div id='wrap'>
          <Routes>
            <Route path="/" element={
            <div className='linkText'>              
              <Link to="/folder">Folder 이동</Link>
              <Link to="/shared">Shared 이동</Link>
            </div>}
            />
            <Route path="folder" element={<Folder/>}/>
            <Route path="shared" element={<Shared/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
