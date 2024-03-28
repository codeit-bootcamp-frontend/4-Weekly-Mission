import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import SharedPage from "./pages/SharedPage/SharedPage";
import FolderPage from "./pages/FolderPage/FolderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "shared",
        element: <SharedPage />,
      },
      {
        path: "folder",
        element: <FolderPage />,
      },
    ],
  },
]);

export default router;
