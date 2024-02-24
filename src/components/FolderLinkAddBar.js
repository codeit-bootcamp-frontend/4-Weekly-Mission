import "components/FolderLinkAddBar.css";

export default function FolderLinkAddBar({ handleSubmit }) {
	const handleLinkAdd = (e) => {
		e.preventDefault();
		handleSubmit("addLinkToFolder");
	};

	return (
		<div className="background-decoration-color">
			<form onSubmit={handleLinkAdd} className="input-position-origin link-add">
				<label htmlFor="add-link" />
				<input id="add-link" placeholder="링크를 추가해 보세요." />
				<button className="link-add-btn default-btn">추가하기</button>
			</form>
		</div>
	);
}
