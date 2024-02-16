import { BrowserRouter, Route as R, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const Route = () => {
  return (
    <BrowserRouter>
      <Routes>
        <R path="/" element={<Home />} />
        <R path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Route;
