import "./stylesheets/main.css";
import "./App.css";
import Contents from "./Components/Contents.js";
import Footer from "./Components/Footer.js";
import Hero from "./Components/Hero.js";
import Navigation from "./Components/Navigation.js";

const App = () => {
  return (
    <>
      <header className="header">
        <Navigation />
      </header>
      <main>
        <Hero />
        <Contents />
      </main>
      <Footer />
    </>
  );
};

export default App;
