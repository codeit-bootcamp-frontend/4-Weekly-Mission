import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
