import ShareFolderProfile from "components/ShareFolderProfile";
import LinkSearchBar from "components/LinkSearchBar";
import LinkCardCollection from "components/LinkCardCollection";
import "pages/Share.css";

export default function Share() {
	return (
		<div>
			<ShareFolderProfile />
			<main>
				<LinkSearchBar />
				<LinkCardCollection />
			</main>
		</div>
	);
}
