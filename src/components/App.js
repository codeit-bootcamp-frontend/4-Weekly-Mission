import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Landing";
import Signup from "./Signup";
import Signin from "./Signin";
import Privacy from "./Privacy";
import Faq from "./Faq";
import Folder from "./Folder";
import Shared from "./shared/Shared.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Shared />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/folder" element={<Folder />} />
    </Routes>
  );
}

export default App;
