import { BrowserRouter, Route as R, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Card from "./components/Card/Card";

const Route = () => {
  return (
    //TODO: Add Global Style by using styled-components
    <BrowserRouter>
      <Routes>
        <R path="/" element={<Home />} />
        <R path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Route;
