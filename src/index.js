import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Shared from "./pages/Shared";
import App from "./App";
import LinkDetail from "./pages/LinkDetail";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import Folder from "./pages/Folder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shared",
    element: <Shared />,
  },
  {
    path: "folder",
    element: <Folder />,
  },
  {
    path: "link/:linkId",
    element: <LinkDetail />,
  },
  {
    path: "privacy",
    element: <Privacy />,
  },
  {
    path: "faq",
    element: <FAQ />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
