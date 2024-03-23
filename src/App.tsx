import { Layout } from "./components/Layout";
import { Shared } from "./pages/Shared";
import "./setting-files/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Folder } from "./pages/Folder";
import { LinkToButtons } from "./components/LinkToButtons";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LinkToButtons />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
