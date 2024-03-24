import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalBackground, ModalBox } from "./style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";

const AddFolderModal = ({
	setAddFolderModalOpen
}: {
	setAddFolderModalOpen: (arg: boolean) => void;
}) => {
	const [value, setValue] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const closeModal = () => {
		setAddFolderModalOpen(false);
	};

	return (
		<ModalBackground onClick={closeModal}>
			<ModalBox onClick={(e) => e.stopPropagation()}>
				<FontAwesomeIcon
					icon={faXmark}
					className="ModalX"
					onClick={closeModal}
				/>
				<p>폴더 추가</p>
				<input onChange={handleChange} value={value} />
				<button onClick={closeModal}>추가하기</button>
			</ModalBox>
		</ModalBackground>
	);
};

export default AddFolderModal;
