import Footer from '../components/area/Footer';
import Nav from '../components/area/Nav';

function App({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default App;
