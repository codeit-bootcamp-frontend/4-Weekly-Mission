import "./App.css";

import Footer from "./components/footer/Footer";
import NavigationBar from "./components/header/NavigationBar";
import SearchBar from "./components/main/SearchBar";
import UserInformation from "./components/main/UserInformation";

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <UserInformation />
        <SearchBar />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
