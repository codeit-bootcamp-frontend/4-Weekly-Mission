import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
