import FolderList from "../../component/FolderList";
import LinkAddInput from "../../component/LinkAddInput";
import LinkSearchInput from "../../component/LinkSearchInput";
import { useEffect, useState } from "react";
import { getFolderList, getLinkData } from "../../apis/api";
import LinkItems from "../../component/LinkItems";
import { Container, FolderName } from "./style";
import FolderOption from "../../component/FolderOption";
import MobileAddFolderButton from "../../component/MobileAddFolderButton";

type Count = {
	count: number;
};

type Folder = {
	created_at?: string;
	favorite: boolean;
	id: number | string;
	link?: Count;
	name: string;
	user_id?: number;
};

interface Link {
	id: number;
	url: string;
	title: string;
	description: string;
	createdAt: number;
	created_at: number;
	imageSource: string;
	image_source: string;
}

const ALL: Folder = {
	id: "ALL",
	name: "전체",
	favorite: false
};

const FolderPage = () => {
	const [folders, setFolders] = useState<Folder[]>([]);
	const [selectedFolder, setSelectedFolder] = useState<Folder>(ALL);
	const [links, setLinks] = useState<Link[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true);
				const { data } = await getFolderList();
				setFolders([ALL, ...data]);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, []);

	const handleClick = (e: { target: { id: string } }) => {
		const findFolder: any = folders.find(
			(item) => String(item.id) === e.target.id
		);

		setSelectedFolder(findFolder);
	};

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true);
				const { data } = await getLinkData(selectedFolder.id);
				setLinks(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, [selectedFolder]);

	const handleSearchSubmit = (keyword: string) => {
		setLinks(
			links.filter(
				(link) =>
					link.url?.includes(keyword) ||
					link.title?.includes(keyword) ||
					link.description?.includes(keyword)
			)
		);
	};

	return (
		<>
			<LinkAddInput folders={folders} />
			<Container>
				<LinkSearchInput onSubmit={handleSearchSubmit} />
				<FolderList
					folders={folders}
					selectedFolder={selectedFolder}
					onClick={handleClick}
					// isLoading={isLoading}
				/>
				<FolderName>
					{selectedFolder.name}
					<FolderOption selectedFolder={selectedFolder} />
				</FolderName>

				<LinkItems folders={folders} links={links} isLoading={isLoading} />
				<MobileAddFolderButton />
			</Container>
		</>
	);
};

export default FolderPage;
