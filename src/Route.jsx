import { BrowserRouter, Route as R, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Card from "./components/Card/Card";
import Main from "./pages/Main/Main";
import Folder from "./pages/Folder/Folder";

const Route = () => {
  return (
    //TODO: Add Global Style by using styled-components
    <BrowserRouter>
      <Routes>
        <R path="/" element={<Home />} />
        <R path="/folder">
          <R index element={<Folder />} />
          <R path=":folderId" element={<Folder />} />
        </R>
        <R path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Route;
