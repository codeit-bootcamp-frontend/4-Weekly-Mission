import "components/FolderSearchBar.css";

const FolderSearchBar = function () {
	return (
		<div className="folderSearchBarOrigin">
			<label htmlFor="folderSearch"></label>
			<input id="folderSearch" placeholder="링크를 검색해 보세요."></input>
		</div>
	);
};

export default FolderSearchBar;
