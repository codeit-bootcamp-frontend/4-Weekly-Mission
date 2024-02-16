import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./common.css";
import "./reset.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
