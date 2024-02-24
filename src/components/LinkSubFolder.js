import "components/LinkSubFolder.css";
import { useEffect, useState } from "react";
import {
	AddFolderButton,
	EmptySpace,
	AddImage,
	Button,
	SubFolderBtn,
	SubFolderBtnList,
	SubFolderUtilList,
} from "./LinkSubFolder.Styles.jsx";

function AddSubFolder() {
	return (
		<AddFolderButton className="add-sub-folder">
			폴더 추가 <AddImage />
		</AddFolderButton>
	);
}

function SubFoldersList({ subFolderData, handleCurrentFolderChange }) {
	const [subFolderList, setSubFolderList] = useState([]);
	const [selectedBtn, setSelectedBtn] = useState(0);

	const handleBtnStyleChange = async (id, name) => {
		setSelectedBtn(id);
		await handleCurrentFolderChange(id, name);
	};

	useEffect(() => {
		setSubFolderList(subFolderData);
	}, [subFolderData]);

	return (
		<SubFolderBtnList>
			<SubFolderBtn
				key={0}
				state={(selectedBtn === 0).toString()}
				onClick={() => handleBtnStyleChange(0, "전체")}
				className="link-sub-folder-list"
			>
				전체
			</SubFolderBtn>
			{subFolderList.map((item) => (
				<SubFolderBtn
					key={item.id}
					state={(selectedBtn === item.id).toString()}
					className="link-sub-folder-list"
					onClick={() => handleBtnStyleChange(item.id, item.name)}
				>
					{item.name}
				</SubFolderBtn>
			))}
		</SubFolderBtnList>
	);
}

function HandleCurrentSubFolder() {
	return (
		<SubFolderUtilList>
			<Button type="button" className="sub-folder-utility">
				<img src={"share.svg"} alt="ShareButtonImg" />
				공유
			</Button>
			<Button type="button" className="sub-folder-utility">
				<img src={"pen.svg"} alt="RenameButtonImg" />
				이름 변경
			</Button>
			<Button type="button" className="sub-folder-utility">
				<img src={"Group 36.svg"} alt="DeleteButtonImg" />
				삭제
			</Button>
		</SubFolderUtilList>
	);
}

export { HandleCurrentSubFolder, SubFoldersList, AddSubFolder };
