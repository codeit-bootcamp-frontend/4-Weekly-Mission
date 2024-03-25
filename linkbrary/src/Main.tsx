import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Folder from "./pages/Folder";
import Shared from "./pages/Shared";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/folder" element={<Folder />} />
        <Route path="/shared" element={<Shared />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
