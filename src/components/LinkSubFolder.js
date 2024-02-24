import "components/LinkSubFolder.css";
import { useEffect, useState } from "react";
import {
	Button,
	SubFolderBtn,
	SubFolderBtnList,
	SubFolderUtilList,
} from "./LinkSubFolder.Styles.jsx";

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

function HandleCurrentSubFolder({ handleFunction }) {
	return (
		<SubFolderUtilList>
			{handleFunction.map((item) => (
				<Button
					type="button"
					className="sub-folder-utility"
					onClick={() => item.kebabHandle(item.type)}
				>
					{item.btnName}
					<img src={item.imgUrl} alt={item.imgAlt} />
				</Button>
			))}
		</SubFolderUtilList>
	);
}

export { HandleCurrentSubFolder, SubFoldersList };
