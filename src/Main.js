import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./component/App/App";
import FolderPageLayout from "./pages/Folder/FolderPageLayout/FolderPageLayout";
import LinkItems from "./component/LinkItems/LinkItems";
import SharedPage from "./pages/Shared/SharedPage";
import HomePage from "./pages/HomePage/HomePage";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="shared">
            <Route index element={<SharedPage />} />
          </Route>
          <Route path="folder">
            <Route index element={<FolderPageLayout />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
