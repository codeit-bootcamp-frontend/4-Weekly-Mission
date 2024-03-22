import React from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Folder from "./pages/folder";
import Shared from "./pages/shared";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
