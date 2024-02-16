import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import App from "./App";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
