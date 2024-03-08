import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing/Landing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
