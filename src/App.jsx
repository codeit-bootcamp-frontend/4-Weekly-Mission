import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedPage } from "./pages/SharedPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
}
