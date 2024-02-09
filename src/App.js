import "./App.css";
import Folder from "./Pages/Folder";
import { Route, Routes } from "react-router-dom";
import LinkDetail from "./Pages/LinkDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Folder />} />
        <Route path="/link/:linkId" element={<LinkDetail />} />
      </Routes>
    </div>
  );
}

export default App;
