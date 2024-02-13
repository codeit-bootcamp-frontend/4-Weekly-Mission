import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { SharedPage } from "../pages";
import App from "App";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<SharedPage />} />
          </Route>
        </Routes>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Router>
    </div>
  );
};

export default Routers;
