// import { useEffect, useState } from "react-dom";
import "./App.css";
import Gnb from "./components/Gnb.js";
import Shared from "./pages/Shared/Shared.js";

function App() {
  return (
    <div>
      <div>안녕하세요 App.js입니다.</div>
      <Gnb></Gnb>
      <Shared></Shared>
    </div>
  );
}

export default App;
