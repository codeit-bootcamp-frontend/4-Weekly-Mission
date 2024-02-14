import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { SharedPage } from "../pages";
import App from "App";
import FolderPage from "../pages/FolderPage/FolderPage";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<SharedPage />} />
            <Route path="folder" element={<FolderPage />} />
          </Route>
        </Routes>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Router>
    </div>
  );
};

export default Routers;
