import React from "react";
import { Navigate, Route } from "react-router-dom";
import * as Page from "../../pages/index";

function Routes() {
  return (
    <Routes>
      <Route path="/" element={Page.Shared} />
      <Route path="/folders" element={Page.Folder} />
      <Route path="*" element={<Navigate replace to={`/`} />} />
    </Routes>
  );
}

export default Routes;
