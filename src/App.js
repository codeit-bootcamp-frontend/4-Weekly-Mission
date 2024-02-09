import "./App.css";
import Folder from "./Pages/Folder";
import { Route, Routes } from "react-router-dom";
import LinkDetail from "./Pages/LinkDetail";
import FAQ from "./Pages/FAQ";
import Privacy from "./Pages/Privacy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Folder />} />
        <Route path="/link/:linkId" element={<LinkDetail />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
