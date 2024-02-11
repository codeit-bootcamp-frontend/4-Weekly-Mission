import HeadNav from "components/HeadNav.js";
import Footer from "components/Footer.js";
import FolderProFile from "components/FolderProfile";
import FolderData from "components/FolderData";

function Folder() {
	return (
		<div className="folder">
			<HeadNav />
			<FolderProFile />
			<FolderData />
			<Footer />
		</div>
	);
}

export default Folder;
