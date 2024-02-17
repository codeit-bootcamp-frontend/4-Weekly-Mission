import ShareFolderProfile from "components/ShareFolderProfile";
import LinkSearchBar from "components/LinkSearchBar";
import LinkCardCollection from "components/LinkCardCollection";
import "pages/Share.css";
import { useEffect, useState } from "react";
import { acceptDataFromApi } from "Api";
import HeadNav from "components/HeadNav";

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
		<>
			<HeadNav />
			<div>
				<ShareFolderProfile />
				<main>
					<LinkSearchBar />
					<LinkCardCollection items={items} />
				</main>
			</div>
		</>
	);
}
