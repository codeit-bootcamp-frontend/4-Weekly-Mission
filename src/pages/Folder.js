import FolderLinkAddBar from "components/FolderLinkAddBar";
import "pages/Folder.css";
import LinkSubFolder from "components/LinkSubFolder";
import HeadNav from "components/HeadNav";

export default function Folder() {
	return (
		<div>
			<FolderLinkAddBar />
			<main>
				<LinkSubFolder />
			</main>
		</div>
	);
}
