import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import "./index.css";
import "./styles/font-sizes.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
