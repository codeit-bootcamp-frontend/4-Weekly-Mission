import { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ModalBackground } from "./style";

const EditFolderNameModal = ({ setEditModalOpen, selectedFolder }) => {
	const [name, setName] = useState(selectedFolder.name);

	const closeModal = () => {
		setEditModalOpen(false);
	};

	const handleChange = (e) => {
		setName(e.target.value);
	};

	return (
		<ModalBackground onClick={closeModal}>
			<div
				id="EditModal"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<FontAwesomeIcon
					icon={faXmark}
					className="EditModalX"
					onClick={closeModal}
				/>
				<p id="EditModalText">폴더 이름 변경</p>
				<input id="EditModalInput" onChange={handleChange} value={name}></input>
				<button id="EditModalButton" onClick={closeModal}>
					변경하기
				</button>
			</div>
		</ModalBackground>
	);
};

export default EditFolderNameModal;
