import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Signup from "./Signup";
import Signin from "./Signin";
import Privacy from "./Privacy";
import Faq from "./Faq";
import Folder from "./folder/Folder";
import Shared from "./shared/Shared";
import PageLayout from "./pageLayout/PageLayout";
import GlobalStyle from "./GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Navigate to="/folder" />} />
          <Route path="shared" element={<Shared />}>
            <Route index element={<Shared />} />
            <Route path=":folderId" element={<Shared />} />
          </Route>
          <Route path="landing" element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="faq" element={<Faq />} />
          <Route path="folder" element={<Folder />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
