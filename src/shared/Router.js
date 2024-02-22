import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Shared from '../components/Shared';
import Signin from '../components/Signin';
import Faq from '../components/Faq';
import Privacy from '../components/Privacy';
import Landing from '../components/Landing';
import Signup from '../components/Signup';
import Folder from '../components/Folder';
import EditModal from '../components/modal/EditModal';
import AddFolderModal from '../components/modal/AddFolderModal';
import ShareModal from '../components/modal/ShareModal';
import DeleteFolderModal from '../components/modal/DeleteFolderModal';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Landing />} />
          <Route path='/shared' element={<Shared />} />
          <Route path='/folder' element={<Folder />} />
        </Route>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/modal' element={<DeleteFolderModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
