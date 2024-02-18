import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import App from "./App";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Main;