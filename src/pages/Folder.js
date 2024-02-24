import FolderLinkAddBar from "components/FolderLinkAddBar";
import "pages/Folder.css";
import {
	AddSubFolder,
	HandleCurrentSubFolder,
	SubFoldersList,
} from "components/LinkSubFolder";
import HeadNav from "components/HeadNav";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useAsync from "components/Hooks/useAsync";
import { acceptDataFromApi } from "Api";
import { useSearchParams } from "react-router-dom";
import {
	CurrentSubFolder,
	EmptySpace,
	SubFolderUtil,
} from "components/LinkSubFolder.Styles.jsx";
import LinkCardCollection from "components/LinkCardCollection.js";
import LinkSearchBar from "components/LinkSearchBar.js";

const StyledHeadNav = styled(HeadNav)`
	position: relative;
`;

export default function Folder({ userId = 1 }) {
	const [isCurrentFolderAll, setIsCurrentFolderAll] = useState(true);
	const [currentFolderName, setCurrentFolderName] = useState("전체");
	const [subFolderList, setSubFolderList] = useState([]);
	const [isEmptyResponse, setIsEmptyResponse] = useState(true);
	const [isLoading, error, acceptDataFromApiAsync] =
		useAsync(acceptDataFromApi);
	const [currentFolderQuery, setCurrentFolderQuery] = useState(
		`users/${userId}/links`
	);
	const [searchParams, setSearchParams] = useSearchParams();

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
			setSearchParams("");
			setIsCurrentFolderAll(true);
			return;
		}
		setSearchParams({ folderId: id });
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

	useEffect(() => {
		handleShareLoad(currentFolderQuery);
	}, [currentFolderQuery]);

	const handleKebabAction = (asdf) => {
		console.log(`${asdf}에서 호출됨. 디버깅용.`);
	};

	const kebabActions = [
		{ btnName: "추가하기", btnAction: handleKebabAction },
		{ btnName: "더 추가하기", btnAction: handleKebabAction },
		{ btnName: "더욱추가하기", btnAction: handleKebabAction },
	];

	return (
		<>
			<StyledHeadNav />
			<FolderLinkAddBar />
			<main>
				<SubFolderUtil>
					<SubFoldersList
						subFolderData={subFolderList}
						handleCurrentFolderChange={handleCurrentFolderChange}
					/>
					<AddSubFolder />
				</SubFolderUtil>
				<SubFolderUtil>
					<CurrentSubFolder>{currentFolderName}</CurrentSubFolder>
					{!isCurrentFolderAll && <HandleCurrentSubFolder />}
				</SubFolderUtil>
				<LinkSearchBar />
				{isEmptyResponse || isLoading ? (
					<EmptySpace>
						{isLoading ? "불러오는 중입니다..." : "저장된 링크가 없습니다."}
					</EmptySpace>
				) : (
					<>
						<LinkCardCollection
							items={items}
							favorite={true}
							kebab={kebabActions}
						/>
					</>
				)}
			</main>
		</>
	);
}
