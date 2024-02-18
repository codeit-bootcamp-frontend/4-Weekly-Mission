import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./pages/shared/index";
import Folder from "./pages/folder";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
