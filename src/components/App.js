import React, { useState, useEffect } from "react";
import { FolderMain } from "./folder/FolderMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./shared/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element="#"></Route>
          <Route path="/shared" element={<Main />}></Route>
          <Route path="/folder " element={<FolderMain />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
