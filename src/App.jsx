import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Folder from "./pages/Folder";
import Shared from "./pages/Shared";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/folder" element={<Folder />} />
        <Route path="/shared" element={<Shared />} />
      </Routes>
    </>
  );
}

export default App;
