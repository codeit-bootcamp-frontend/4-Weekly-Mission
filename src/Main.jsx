import ReactDOM from "react-dom/client";
import Shared from "./pages/shared/SharedPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import Folder from "./pages/folder/Folder.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shared" element={<Shared />} />
      <Route path="folder" element={<Folder />} />
    </Routes>
  </BrowserRouter>
);
