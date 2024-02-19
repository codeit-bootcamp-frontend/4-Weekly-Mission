import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Route path="/folder" element={<App />}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
