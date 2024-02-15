import FolderLinkAddBar from "components/FolderLinkAddBar";
import LinkSearchBar from "components/LinkSearchBar";
import LinkCardCollection from "components/LinkCardCollection";
import "pages/Folder.css";

export default function Folder() {
	return (
		<div>
			<FolderLinkAddBar />
			<main>
				<LinkSearchBar />
				<LinkCardCollection />
			</main>
		</div>
	);
}
