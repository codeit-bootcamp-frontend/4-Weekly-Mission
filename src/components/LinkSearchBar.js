import "components/LinkSearchBar.css";

const LinkSearchBar = function () {
	return (
		<form className={"folder-search-bar input-position-origin"}>
			<label htmlFor="folderSearch"></label>
			<input id="folderSearch" placeholder="링크를 검색해 보세요."></input>
		</form>
	);
};

export default LinkSearchBar;
