import { Page } from "./Pages/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/folder" element={<Page />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
