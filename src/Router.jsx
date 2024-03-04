import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./pages/shared/index";
import Folder from "./pages/folder";
import TestPage from "./pages/test";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
