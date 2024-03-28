import { useEffect, useState } from "react";
import { SharedFolder, getSharedFolder } from "../../apis/api";
import FolderOwner from "../../component/FolderOwner";
import LinkItems from "../../component/LinkItems";
import LinkSearchInput from "../../component/LinkSearchInput";
import { Container } from "./style";

const SharedPage = () => {
	const [folderData, setFolderData] = useState<SharedFolder["folder"] | null>(
		null
	);
	const [sharedLinks, setSharedLinks] = useState<
		SharedFolder["folder"]["links"]
	>([]);

	const getData = async () => {
		try {
			const data = await getSharedFolder();
			setFolderData(data.folder);
			setSharedLinks(data.folder.links);
		} catch (error) {}
	};

	useEffect(() => {
		getData();
	}, []);

	const handleSearchSubmit = (keyword: string) => {
		setSharedLinks(
			sharedLinks.filter(
				(link) =>
					link.url.includes(keyword) ||
					link.title.includes(keyword) ||
					link.description.includes(keyword)
			)
		);
	};

	return (
		<>
			{folderData ? (
				<>
					<FolderOwner name={folderData?.name} owner={folderData?.owner} />
					<Container>
						<LinkSearchInput onSubmit={handleSearchSubmit} />
						<LinkItems links={sharedLinks} />
					</Container>
				</>
			) : (
				<p className="loadFail">저장된 링크가 없습니다.</p>
			)}
		</>
	);
};

export default SharedPage;
