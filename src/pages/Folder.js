import FolderLinkAddBar from "components/FolderLinkAddBar";
import LinkSearchBar from "components/LinkSearchBar";
import LinkCardCollection from "components/LinkCardCollection";

export default function Folder() {
	return (
		<div>
			<FolderLinkAddBar />
			<LinkSearchBar />
			<LinkCardCollection />
		</div>
	);
}
