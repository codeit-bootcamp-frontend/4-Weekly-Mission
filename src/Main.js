import App from "./pages/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Folder from "./components/folder";
import Home from "./components/Home";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/folder" element={<Folder />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
