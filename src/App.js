import "./App.css";
import Folder from "./pages/Folder";
import {Route, Routes} from "react-router-dom";
import LinkDetail from "./pages/LinkDetail";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Folder/>}/>
                <Route path="/link/:linkId" element={<LinkDetail/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/faq" element={<FAQ/>}/>
            </Routes>
        </div>
    );
}

export default App;
