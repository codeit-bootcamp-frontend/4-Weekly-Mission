import styled from "styled-components";
import "components/LinkSubFolder.css";
import { useEffect, useState } from "react";
import { acceptDataFromApi } from "Api";
import LinkSearchBar from "./LinkSearchBar";
import LinkCardCollection from "./LinkCardCollection";

const SubFolderBtnList = styled.div`
	display: flex;
	gap: 8px;
`;

const SubFolderUtilList = styled.div`
	display: flex;
	gap: 12px;
`;

const SubFolderUtil = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24px;
`;

const SubFolderTitle = styled.p`
	font-family: Pretendard;
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: -0.2px;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	text-align: center;
	gap: 4px;
	background-color: var(--LBrary-white);
`;

const SubFolderBtn = styled.button`
	display: flex;
	align-items: center;
	text-align: center;
	gap: 4px;
	background-color: ${({ state = false }) =>
		state ? `var(--LBrary-Primary-color)` : `var(--LBrary-white);`};
	color: ${({ state = false }) =>
		state ? `var(--LBrary-White);` : `var(--LBrary-Black);`};
`;

function AddSubFolder() {
	return (
		<Button className="add-sub-folder">
			폴더 추가 <img src={"add.svg"} alt="AddFolderButton" />
		</Button>
	);
}

const EmptySpace = styled.div`
	color: var(--LBrary-Black);
	padding: 41px 0 35px;
	margin: 0 auto;
	margin-bottom: 40vh;
	text-align: center;
	font-family: Pretendard;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;

	@media (max-width: 1124px) {
		margin-bottom: 30vh;
	}

	@media (max-width: 767px) {
		font-size: 1.4rem;
	}
`;

const EmptyLink = function () {
	return <EmptySpace>저장된 링크가 없습니다.</EmptySpace>;
};

function SubFolders({ subFolderData, handleCurrentFolderChange }) {
	const [subFolderList, setSubFolderList] = useState([]);
	const [selectedBtn, setSelectedBtn] = useState(0);

	const handleBtnStyleChange = (id, name) => {
		handleCurrentFolderChange(id, name);
		setSelectedBtn(id);
	};

	useEffect(() => {
		setSubFolderList(subFolderData);
	}, [subFolderData]);

	return (
		<SubFolderBtnList>
			<SubFolderBtn
				key={0}
				state={selectedBtn === 0}
				onClick={() => handleBtnStyleChange(0, "전체")}
				className="link-sub-folder-list"
			>
				전체
			</SubFolderBtn>
			{subFolderList.map((item) => (
				<SubFolderBtn
					key={item.id}
					state={selectedBtn === item.id}
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
			<Button className="sub-folder-utility">
				<img src={"share.svg"} alt="ShareButtonImg" />
				공유
			</Button>
			<Button className="sub-folder-utility">
				<img src={"pen.svg"} alt="RenameButtonImg" />
				이름 변경
			</Button>
			<Button className="sub-folder-utility">
				<img src={"Group 36.svg"} alt="DeleteButtonImg" />
				삭제
			</Button>
		</SubFolderUtilList>
	);
}

export default function LinkSubFolder() {
	const [isCurrentFolderAll, setIsCurrentFolderAll] = useState(true);
	const [currentFolderId, setCurrentFolderId] = useState(0);
	const [currentUserId, setCurrentUserId] = useState(1);
	const [currentFolderName, setCurrentFolderName] = useState("전체");
	const [subFolderList, setSubFolderList] = useState([]);
	const [isEmptyResponse, setIsCurrentEmptyResponse] = useState(false);
	const [currentFolderQuery, setCurrentFolderQuery] = useState("users/1/links");
	const [items, setItems] = useState([]);

	const handleShareLoad = async (query) => {
		const { data } = await acceptDataFromApi(query);
		setItems(data);
	};

	const handleCurrentFolderChange = (id, name) => {
		setCurrentFolderId(id);
		setCurrentFolderName(name);
		if (id === 0) {
			setIsCurrentFolderAll(true);
		} else {
			setIsCurrentFolderAll(false);
		}
	};
	const handleCurrentFolderItems = async (id) => {
		setCurrentFolderQuery(`users/1/links${id !== 0 ? `?folderid=${id}` : ""}`);
		await handleShareLoad(currentFolderQuery);
	};

	const subFolderData = async (requestQuery) => {
		const { data } = await acceptDataFromApi(requestQuery);
		setSubFolderList(data);
	};

	useEffect(() => {
		subFolderData(`users/${currentUserId}/folders`);
		handleCurrentFolderItems(currentFolderId);
	}, [subFolderList.length, currentFolderId]);

	return (
		<>
			<div>
				<SubFolderUtil>
					<SubFolders
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
			{isEmptyResponse ? (
				<EmptyLink />
			) : (
				<>
					<LinkCardCollection items={items} />
				</>
			)}
		</>
	);
}
