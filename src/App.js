import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./js/Favorites";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
