import Router from "./components/common/Router";
import { FolderProvider } from "./context/FolderContext";

function App() {
  return (
    <>
      <FolderProvider>
        <Router />
      </FolderProvider>
    </>
  );
}

export default App;
