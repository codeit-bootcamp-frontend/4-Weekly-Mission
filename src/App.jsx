import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Main />
        <Footer className="App-Footer" />
      </UserProvider>
    </div>
  );
}

export default App;
