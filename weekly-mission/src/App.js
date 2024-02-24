
import { Route, Routes } from 'react-router-dom';
import Shared from './pages/Shared';
import Folder from './pages/Folder';

function App() {

  return (
    <Routes>
      <Route 
        path='' 
        element={
          <Shared/>
        }
      />
      <Route 
        path='/folder'
        element={
          <Folder/>
        }
      >
        <Route 
          path=':folderId'
          element={
            <Folder/>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
 