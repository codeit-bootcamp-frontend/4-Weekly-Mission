import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { User } from "./api";

function App() {
  return (
    <>
      <Header User={User} />
      <Main />
      <Footer />
    </>
  );
}
export default App;
