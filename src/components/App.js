import Header from "./Header";
import LinkList from "./LinkList";
import NavigationBar from "./Navbar";

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <LinkList />
      <footer>
        <p>Q&A</p>
      </footer>
    </div>
  );
}

export default App;
