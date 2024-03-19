import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}
