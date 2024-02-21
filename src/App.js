import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/shared";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/shared" element={<Shared />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
