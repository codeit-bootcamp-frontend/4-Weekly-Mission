import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./js/Favorites";
import Folder from "./js/Folder";
import Delete from "./js/modal/Delete";
import "./css/Reset.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/folder" element={<Folder />}></Route>
          <Route path="/delete" element={<Delete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
