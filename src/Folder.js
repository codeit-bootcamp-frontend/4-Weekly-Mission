import HeadNav from "components/HeadNav.js";
import Footer from "components/Footer.js";
import FolderProFile from "components/FolderProfile";
import FolderData from "components/FolderData";
import { useState, useEffect } from "react";
import { acceptDataFromApi } from "Api";

function Folder() {
	const [loadStatus, setLoadStatus] = useState(false);

	return (
		<div className="folder">
			<HeadNav />
			{/* <FolderProFile email={accountData} profileImageSource={accountData} /> */}
			{/* <FolderData folderData={sampleFolderData.links} /> */}
			<Footer />
		</div>
	);
}

export default Folder;
