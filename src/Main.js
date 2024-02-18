import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="folder" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
