import AddFolderModal from "../../AddFolderModal";
import { useState } from "react";
import { Button } from "./style";

const AddFolder = () => {
	const [addFolderModalOpen, setAddFolderModalOpen] = useState(false);

	const handleClick = () => {
		setAddFolderModalOpen(true);
	};

	return (
		<>
			<Button onClick={handleClick}>폴더 추가 +</Button>
			{addFolderModalOpen && (
				<AddFolderModal setAddFolderModalOpen={setAddFolderModalOpen} />
			)}
		</>
	);
};

export default AddFolder;
