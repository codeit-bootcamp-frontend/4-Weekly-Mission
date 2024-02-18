import React from "react";
import HeaderNavigation from "./components/HeaderNavigation";

import Footer from "./components/Footer";
import "./reset.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./pages/shared";
import Landing from "./pages/landing";
import Folder from "./pages/folder";
function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderNavigation />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/shared' element={<Shared />} />
          <Route path='/folder' element={<Folder />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
