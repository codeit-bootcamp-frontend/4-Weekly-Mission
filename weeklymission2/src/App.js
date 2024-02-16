import { FolderPage } from "./Pages/FolderPage";
import { SharedPage } from "./Pages/SharedPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" }></Route> */}
          <Route path="/shared" element={<SharedPage />}></Route>
          <Route path="/folder" element={<FolderPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
