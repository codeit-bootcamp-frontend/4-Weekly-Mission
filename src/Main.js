import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./pages/Shared";
import App from "./components/App";
import Folder from "./pages/Folder";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Shared />} />
          <Route path="folder" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
