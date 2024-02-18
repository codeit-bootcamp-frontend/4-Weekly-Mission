import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import MainPage from "./pages/MainPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import FolderPage from "./pages/FolderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/folder" element={<FolderPage />}></Route>
        </Route>
        <Route element={<SigninPage />} path="/signin" />
        <Route element={<SignupPage />} path="/signup" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
