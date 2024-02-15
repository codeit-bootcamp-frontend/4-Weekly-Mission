import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import * as Page from "../../pages/index";

function Router() {
  return (
    <Routes>
      <Route path="/shared" element={<Page.Shared />} />
      <Route path="/folders" element={<Page.Folder />} />
      <Route path="*" element={<Navigate replace to={`/`} />} />
    </Routes>
  );
}

export default Router;
