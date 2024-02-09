import "App.css";
import HeadNav from "components/HeadNav.js";
import Footer from "components/Footer.js";
import FolderProFile from "components/FolderProfile";
import FolderData from "components/FolderData";

function App() {
	return (
		<div className="App">
			<HeadNav />
			<FolderProFile />
			<FolderData />
			<Footer />
		</div>
	);
}

export default App;
