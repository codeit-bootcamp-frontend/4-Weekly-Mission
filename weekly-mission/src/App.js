
import { Route, Routes } from 'react-router-dom';
import Shared from './pages/Shared';

function App() {

  return (
    <Routes>
      <Route 
        path='' 
        element={
          <Shared/>
        }
      />
      {/* <Route 
        path='/folder'
        element={
        
        }
      /> */}
    </Routes>
  );
}

export default App;
 