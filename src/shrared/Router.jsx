import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/common/layout/Layout';
import Shared from '../pages/shared';
import Folder from '../pages/folder';
import '../App.css';

function Router({ setIsOpen, setFolderName, folderList, folderId, setFolderId }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/shared" element={<Shared />}></Route>
          <Route
            path="/folder"
            element={
              <Folder
                setIsOpen={setIsOpen}
                setFolderName={setFolderName}
                folderList={folderList}
                folderId={folderId}
                setFolderId={setFolderId}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
