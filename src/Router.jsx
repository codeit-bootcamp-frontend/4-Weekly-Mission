import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing/Landing";
import Shared from "./pages/Shared/Shared";
import Folder from "./pages/Folder/Folder";
import Signin from "./pages/Signin/Signin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="shared" element={<Shared />} />
          <Route path="folder" element={<Folder />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
