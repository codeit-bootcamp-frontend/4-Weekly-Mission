import Footer from "./footer/Footer.js";
import NavBar from "./nav-bar/NavBar.js";
import "./global.css";

const profile = "";

function App() {
  return (
    <>
      <NavBar profile={profile} />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
