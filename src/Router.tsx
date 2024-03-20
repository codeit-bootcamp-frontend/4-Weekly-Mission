import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import App from "./App";
import Landing from "./pages/Landing/Landing";
import Shared from "./pages/Shared/Shared";
import Folder from "./pages/Folder/Folder";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Landing />} />
            <Route path="shared" element={<Shared />} />
            <Route path="folder" element={<Folder />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
