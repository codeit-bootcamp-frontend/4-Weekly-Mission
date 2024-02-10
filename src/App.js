import "./components/reset.css";
import NavigationBar from "./components/header/NavigationBar";
import UserInformation from "./components/main/UserInformation";

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <UserInformation />
      </main>
    </>
  );
}

export default App;
