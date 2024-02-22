import "components/FolderLinkAddBar.css";

export default function FolderLinkAddBar() {
	return (
		<div className="background-decoration-color">
			<div className="input-position-origin link-add">
				<label htmlFor="add-link" />
				<input id="add-link" placeholder="링크를 추가해 보세요." />
				<button className="link-add-btn default-btn">추가하기</button>
			</div>
		</div>
	);
}
