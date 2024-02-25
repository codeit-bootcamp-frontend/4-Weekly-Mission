import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import * as Page from "../../pages/index";

function Router() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Page.RootPage />}>
        <Route path="shared" element={<Page.Shared />} />
        <Route path="folders" element={<Page.Folder />} />
      </Route>
=======
      <Route path="/shared" element={<Page.Shared />} />
      <Route path="/folders" element={<Page.Folder />} />
>>>>>>> part2-윤병현
      <Route path="*" element={<Navigate replace to={`/`} />} />
    </Routes>
  );
}

export default Router;
