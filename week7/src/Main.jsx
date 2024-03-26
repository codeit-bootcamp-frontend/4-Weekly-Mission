import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/folder" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
