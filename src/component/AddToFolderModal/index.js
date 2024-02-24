import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalBackground, ModalBox, Ul } from "./style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AddToFolderModal = ({ link, setAddToFolderModalOpen, folders }) => {
	const [folderToAdd, setFolderToAdd] = useState({});

	const closeModal = () => {
		setAddToFolderModalOpen(false);
	};

	const handleClick = (e) => {
		console.log(e.target.id);
	};

	return (
		<ModalBackground onClick={closeModal}>
			<ModalBox onClick={(e) => e.stopPropagation()}>
				<FontAwesomeIcon
					icon={faXmark}
					className="ModalX"
					onClick={closeModal}
				/>
				<p>폴더에 추가</p>
				<p className="folderName">{link}</p>
				<Ul>
					{folders.map(
						(folder) =>
							folder.name !== "전체" && (
								<li key={folder.id} id={folder.id} onClick={handleClick}>
									<div>
										<span>
											{folder.name} {folder.id}
										</span>
										<span className="count">{folder.link.count}개 링크</span>
									</div>
									{folder.id === folderToAdd?.id && (
										<span className="selected">✓</span>
									)}
								</li>
							)
					)}
				</Ul>
			</ModalBox>
		</ModalBackground>
	);
};

export default AddToFolderModal;
