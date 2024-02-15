import HeadNav from "components/HeadNav.js";
import Footer from "components/Footer.js";
import FolderProFile from "components/FolderProfile";
import FolderData from "components/FolderCardCollection";

function Folder() {
	return (
		<>
			<HeadNav />
			<FolderProFile />
			<FolderData />
			<Footer />
		</>
	);
}

export default Folder;
