import Header from "../components/header";
import Footer from "../components/footer";
import { User } from "../api/api";
import FolderPage from "../components/folder";

function App({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <FolderPage />
      <Footer />
    </>
  );
}
export default App;
