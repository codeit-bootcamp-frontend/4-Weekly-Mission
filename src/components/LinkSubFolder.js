import styled from "styled-components";
import folders from "folders_mockData.json";
import "components/LinkSubFolder.css";

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

function SubFolders({ subFolderData }) {
	const { data } = subFolderData;
	return (
		<SubFolderBtnList>
			{data.map((item) => (
				<Button className="link-sub-folder-list">{item.name}</Button>
			))}
		</SubFolderBtnList>
	);
}

function CurrentSubFolder(currentFolder) {
	return <SubFolderTitle>{currentFolder.currentFolder}</SubFolderTitle>;
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
	return (
		<div>
			<SubFolderUtil>
				<SubFolders subFolderData={folders} />
				<AddSubFolder />
			</SubFolderUtil>
			<SubFolderUtil>
				<CurrentSubFolder currentFolder={"Testing"} />
				<HandleCurrentSubFolder />
			</SubFolderUtil>
		</div>
	);
}
