import "components/LinkSubFolder.css";
import { useEffect, useState } from "react";
import { acceptDataFromApi } from "Api";
import LinkSearchBar from "./LinkSearchBar";
import LinkCardCollection from "./LinkCardCollection";
import {
	AddFolderButton,
	EmptySpace,
	AddImage,
	Button,
	SubFolderBtn,
	SubFolderBtnList,
	SubFolderTitle,
	SubFolderUtilList,
	SubFolderUtil,
} from "./LinkSubFolder.Styles.jsx";
import useAsync from "./Hooks/useAsync";

function AddSubFolder() {
	return (
		<AddFolderButton className="add-sub-folder">
			폴더 추가 <AddImage />
		</AddFolderButton>
	);
}

const EmptyLink = function ({ isLoading }) {
	const spaceText = isLoading
		? "불러오는 중입니다..."
		: "저장된 링크가 없습니다.";

	return <EmptySpace>{spaceText}</EmptySpace>;
};

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

function CurrentSubFolder({ currentFolder }) {
	return <SubFolderTitle>{currentFolder}</SubFolderTitle>;
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

export default function LinkSubFolder({ userId = 1 }) {
	const [isCurrentFolderAll, setIsCurrentFolderAll] = useState(true);
	const [currentFolderName, setCurrentFolderName] = useState("전체");
	const [subFolderList, setSubFolderList] = useState([]);
	const [isEmptyResponse, setIsEmptyResponse] = useState(true);
	const [isLoading, error, acceptDataFromApiAsync] =
		useAsync(acceptDataFromApi);
	const [currentFolderQuery, setCurrentFolderQuery] = useState(
		`users/${userId}/links`
	);
	const [items, setItems] = useState([]);

	const handleShareLoad = async (query) => {
		setIsEmptyResponse(false);
		const { data } = await acceptDataFromApiAsync(query);
		if (error) throw new Error(error.message);

		if (data.length === 0) {
			setIsEmptyResponse(true);
		}
		setItems(data);
	};

	const handleCurrentFolderChange = (id, name) => {
		setCurrentFolderName(name);
		setCurrentFolderQuery(
			`users/${userId}/links${id !== 0 ? `?folderId=${id}` : ""}`
		);
		if (id === 0) {
			setIsCurrentFolderAll(true);
			return;
		}
		setIsCurrentFolderAll(false);
	};

	const acceptSubFolderList = async (requestQuery) => {
		const { data } = await acceptDataFromApi(requestQuery);
		setSubFolderList(data);
	};

	useEffect(() => {
		acceptSubFolderList(`users/${userId}/folders`);
		handleShareLoad(`users/${userId}/links`);
	}, [userId]);

	return (
		<>
			<div>
				<SubFolderUtil>
					<SubFoldersList
						subFolderData={subFolderList}
						handleCurrentFolderChange={handleCurrentFolderChange}
					/>
					<AddSubFolder />
				</SubFolderUtil>
				<SubFolderUtil>
					<CurrentSubFolder currentFolder={currentFolderName} />
					{!isCurrentFolderAll && <HandleCurrentSubFolder />}
				</SubFolderUtil>
			</div>
			<LinkSearchBar />
			{isEmptyResponse || isLoading ? (
				<EmptyLink isLoading={isLoading} />
			) : (
				<>
					<LinkCardCollection items={items} favorite={true} kebab={true} />
				</>
			)}
		</>
	);
}
