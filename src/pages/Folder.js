import FolderLinkAddBar from "components/FolderLinkAddBar";
import LinkSearchBar from "components/LinkSearchBar";
import LinkCardCollection from "components/LinkCardCollection";
import "pages/Folder.css";
import LinkSubFolder from "components/LinkSubFolder";

export default function Folder() {
	return (
		<div>
			<FolderLinkAddBar />
			<main>
				<LinkSearchBar />
				<LinkSubFolder />
				<LinkCardCollection />
			</main>
		</div>
	);
}
