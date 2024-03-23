import "sharing/styles/reset.css";
import { BrowserRouter, Route } from "react-router-dom";
import { SharedPage } from "pages/SharedPage";
import { FolderPage } from "pages/FolderPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/shared" element={<SharedPage />} />
      <Route path="/folder" element={<FolderPage />} />
    </BrowserRouter>
  );
}

export default App;
