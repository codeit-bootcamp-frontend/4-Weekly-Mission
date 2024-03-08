import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing/Landing";
import Shared from "./pages/Shared/Shared";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="shared" element={<Shared />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
