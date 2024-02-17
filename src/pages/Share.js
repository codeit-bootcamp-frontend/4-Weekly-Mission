import ShareFolderProfile from "components/ShareFolderProfile";
import LinkSearchBar from "components/LinkSearchBar";
import LinkCardCollection from "components/LinkCardCollection";
import "pages/Share.css";
import { useEffect, useState } from "react";
import { acceptDataFromApi } from "Api";

export default function Share() {
	const [items, setItems] = useState([]);

	const handleShareLoad = async () => {
		const {
			folder: { links },
		} = await acceptDataFromApi("sample/folder");
		setItems(links);
	};

	useEffect(() => {
		handleShareLoad();
	}, []);

	return (
		<div>
			<ShareFolderProfile />
			<main>
				<LinkSearchBar />
				<LinkCardCollection items={items} />
			</main>
		</div>
	);
}
