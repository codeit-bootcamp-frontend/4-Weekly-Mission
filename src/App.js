import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalFolder from "../src/components/PersonalFolder/PersonalFolder";
import NewPage from "./components/NewPage/NewPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PersonalFolder />} />
          <Route path="/newPage" element={<NewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
