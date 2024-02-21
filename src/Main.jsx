import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import FolderPage from "./pages/FolderPage";
import SharedPage from "./pages/SharedPage";
import FaqPage from "./pages/FaqPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="folder" element={<FolderPage />} />
        <Route path="shared" element={<SharedPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="privacypolicy" element={<PrivacyPolicyPage />} />
      </Route>
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Main;
