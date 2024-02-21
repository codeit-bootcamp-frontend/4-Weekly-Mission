import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import SharedPage from "./page/SharedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
