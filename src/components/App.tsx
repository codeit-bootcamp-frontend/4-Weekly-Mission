import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Signin from "./Signin";
// import Signup from "./Signup";
// import Privacy from "./Privacy";
// import Faq from "./Faq";
import Folder from "./folder/Folder";
import Shared from "./shared/Shared";
import PageLayout from "./pageLayout/PageLayout";
import GlobalStyle from "./GlobalStyle";
import { ContextProvider } from "./ContextProvider";
import { useRef } from "react";
function App() {
  const footerTarget = useRef<HTMLDivElement>(null);
  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        <Routes>
          <Route path="/" element={<PageLayout footerTarget={footerTarget} />}>
            <Route index element={<Navigate to="/landing" />} />
            <Route path="shared" element={<Shared />}>
              <Route index element={<Shared />} />
              <Route path=":folderId" element={<Shared />} />
            </Route>
            <Route path="landing" element={<Landing />} />
            <Route path="signin" element={<Signin />} />
            {/* 해당 페이지들 추가시 주석 해제 */}
            {/* <Route path="signup" element={<Signup />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="faq" element={<Faq />} /> */}
            <Route
              path="folder"
              element={<Folder footerTarget={footerTarget} />}
            />
          </Route>
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
