import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./common.css";
import "./reset.css";
import Homepage from "./pages/Homepage";
import Folder from "./pages/Folder";
import Shared from "./pages/Shared";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="folder" element={<Folder />} />
      <Route path="shared" element={<Shared />} />
    </Routes>
  </BrowserRouter>
);
