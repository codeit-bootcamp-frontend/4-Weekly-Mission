import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { HomePage, SharedPage, FolderPage } from "../pages";
import App from "App";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="shared" element={<SharedPage />} />
            <Route path="folder" element={<FolderPage />} />
            <Route path="shared/:folderId" element={<FolderPage />} />
           
            
          </Route>
        </Routes>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Router>
    </div>
  );
};

export default Routers;
