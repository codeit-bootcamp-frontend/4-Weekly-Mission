import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
