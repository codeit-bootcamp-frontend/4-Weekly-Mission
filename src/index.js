import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import "./index.css";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import LinkDetail from "./pages/LinkDetail";

let router;
router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Shared /> },
      { path: "folder", element: <Folder /> },
      { path: "link/:id", element: <LinkDetail /> },
      { path: "shared", element: <Shared /> },
      { path: "faq", element: <FAQ /> },
      { path: "privacy", element: <Privacy /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
