import App from "./pages/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Folder from "./components/folder";
import Home from "./components/Home";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/folder" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
