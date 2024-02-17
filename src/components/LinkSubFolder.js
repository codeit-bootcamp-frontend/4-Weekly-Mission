import styled from "styled-components";
import folders from "folders_mockData.json";
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
	background-color: var(--LBrary-white);
	align-items: center;
	text-align: center;
	gap: 4px;
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

function SubFolders({ subFolderData }) {
	const [subFolderList, setSubFolderList] = useState([]);

	useEffect(() => {
		setSubFolderList(subFolderData);
	}, [subFolderData]);

	return (
		<SubFolderBtnList>
			<Button key={0} className="link-sub-folder-list">
				전체
			</Button>
			{subFolderList.map((item) => (
				<Button key={item.id} className="link-sub-folder-list">
					{item.name}
				</Button>
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
	const [isCurrentFolderAll, setIsCurrentFolderAll] = useState(false);
	const [currentFolderId, setCurrentFolderId] = useState(0);
	const [currentFolderName, setCurrentFolderName] = useState("전체");
	const [subFolderList, setSubFolderList] = useState([]);
	const [isEmptyResponse, setIsCurrentEmptyResponse] = useState(false);
	const [items, setItems] = useState([]);

	const handleShareLoad = async () => {
		const { data } = await acceptDataFromApi("users/1/links");
		console.log(data);
		setItems(data);
	};

	useEffect(() => {
		handleShareLoad();
	}, []);

	const subFolderData = async (requestQuery) => {
		const { data } = await acceptDataFromApi(requestQuery);
		setSubFolderList(data);
	};

	const SUB_FOLDER = "users/1/folders";

	useEffect(() => {
		subFolderData(SUB_FOLDER);
	}, [subFolderList.length]);

	return (
		<>
			<div>
				<SubFolderUtil>
					<SubFolders subFolderData={subFolderList} />
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
