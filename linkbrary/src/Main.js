import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import App from "./components/Folder";
import App from "./components/Shared";

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
