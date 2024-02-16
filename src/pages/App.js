import Header from "../components/header";
import Footer from "../components/footer";

function App({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
export default App;
