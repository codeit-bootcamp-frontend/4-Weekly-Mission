import { Routes, Route } from "react-router-dom";
import routes from "../routes";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<MainPage />}></Route>

      <Route path={routes.login} element={<SignInPage />}></Route>
      <Route path={routes.signup} element={<SignUpPage />}></Route>
    </Routes>
  );
}

export default App;
