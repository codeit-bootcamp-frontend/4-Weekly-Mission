import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SharedPage from './pages/SharedPage';
// import FolderPage from './pages/FolderPage';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <SharedPage />
        {/* <FolderPage /> */}
      </>
    </BrowserRouter>
  );
};

export default App;
