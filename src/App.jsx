import { RouterProvider, createBrowserRouter } from "react-router-dom"
import * as Page from "./pages"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page.Root />,
      children: [
        { index: true, element: <Page.Home /> },
        { path: "shared", element: <Page.Share /> },
        { path: "folder", element: <Page.Folder /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
