import GlobalStyles from "./styles/GlobalStyle";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Landing />
      <Footer />
    </>
  );
};

export default App;
