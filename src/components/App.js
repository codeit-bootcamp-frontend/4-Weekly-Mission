import Header from "./Header";
import NavigationBar from "./Navbar";

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <div>
        <p>content</p>
      </div>
      <footer>
        <p>Q&A</p>
      </footer>
    </div>
  );
}

export default App;
