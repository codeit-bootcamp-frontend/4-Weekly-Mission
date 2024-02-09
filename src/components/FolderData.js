import "components/FolderData.css";
import FolderSearchBar from "./FolderSearchBar";
import FolderCard from "./FolderCard";

const FolderData = function () {
	return (
		<main>
			<FolderSearchBar />
			<section className="folderCardGrid">
				<FolderCard />
				<FolderCard />
				<FolderCard />
				<FolderCard />
				<FolderCard />
				<FolderCard />
			</section>
		</main>
	);
};

export default FolderData;
