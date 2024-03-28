import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalBackground, ModalBox, Ul } from "./style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { MouseEvent, useState } from "react";
import { FolderListDatum } from "../../apis/api";

interface Props {
	link: string;
	setAddToFolderModalOpen: (arg: boolean) => void;
	folders: FolderListDatum[];
}

const AddToFolderModal = ({
	link,
	setAddToFolderModalOpen,
	folders
}: Props) => {
	const [folderToAdd, setFolderToAdd] = useState("");

	const closeModal = (e: MouseEvent) => {
		e.preventDefault();
		setAddToFolderModalOpen(false);
	};

	const handleClick = (
		e: { target: { id: string } } & MouseEvent<HTMLLIElement>
	) => {
		setFolderToAdd(e.target.id);
	};

	const handleEvent = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		e.preventDefault();
	};

	return (
		<ModalBackground onClick={closeModal}>
			<ModalBox onClick={handleEvent}>
				<FontAwesomeIcon
					icon={faXmark}
					className="ModalX"
					onClick={closeModal}
				/>
				<p>폴더에 추가</p>
				<p className="link">{link}</p>
				<Ul>
					{folders.map(
						(folder) =>
							folder.name !== "전체" && (
								<li
									key={folder.id}
									id={folder.id.toString()}
									onClick={handleClick}
								>
									<div>
										<span>
											{folder.name} {folder.id}
										</span>
										<span className="count">{folder.link.count}개 링크</span>
									</div>
									{folder.id === folderToAdd && (
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
