import "components/LinkSearchBar.css";

const LinkSearchBar = function () {
	return (
		<div className={"folder-search-bar input-position-origin"}>
			<label htmlFor="folderSearch"></label>
			<input id="folderSearch" placeholder="링크를 검색해 보세요."></input>
		</div>
	);
};

export default LinkSearchBar;
