import { useState } from "react";
import linkImg from "../../images/link.svg";
import AddToFolderModal from "../AddToFolderModal";
import { LinkAddForm, Div } from "./style";

const LinkAddInput = ({ folders }) => {
	const [link, setLink] = useState("");
	const [addToFolderModalOpen, setAddToFolderModalOpen] = useState(false);

	const handleChange = (e) => {
		setLink(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setAddToFolderModalOpen(true);
	};

	return (
		<>
			<Div>
				<LinkAddForm onSubmit={handleSubmit}>
					<img src={linkImg} alt="링크 이미지" />
					<input
						id="linkEntered"
						placeholder="링크를 추가해 보세요"
						value={link}
						onChange={handleChange}
					/>
					<button type="submit">추가하기</button>
				</LinkAddForm>
			</Div>
			{addToFolderModalOpen && (
				<AddToFolderModal
					link={link}
					setAddToFolderModalOpen={setAddToFolderModalOpen}
					folders={folders}
				/>
			)}
		</>
	);
};

export default LinkAddInput;
