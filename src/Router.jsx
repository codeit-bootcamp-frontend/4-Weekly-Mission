import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./pages/Shared";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<Shared />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
