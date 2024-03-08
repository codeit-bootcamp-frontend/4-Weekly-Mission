import GlobalStyles from "./styles/GlobalStyle";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navigation />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
