import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { SharedPage, DetailPage } from "../pages";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SharedPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
