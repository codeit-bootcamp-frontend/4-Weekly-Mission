import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import "./styles/_base.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={router} />);
