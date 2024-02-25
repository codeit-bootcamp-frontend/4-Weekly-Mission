import React, { useState, useEffect } from "react";
import { FolderMain } from "./folder/FolderMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./shared/Main";
import { FolderNoLink } from "./folder/FolderNoLink";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element="#"></Route>
          <Route path="/shared" element={<Main />}></Route>
          <Route path="/folder " element={<FolderMain />}></Route>
          <Route path="*" element={<FolderNoLink />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
