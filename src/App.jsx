import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FolderPage from "./pages/FolderPage";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <FolderPage />
        <Footer className="App-Footer" />
      </UserProvider>
    </div>
  );
}

export default App;
