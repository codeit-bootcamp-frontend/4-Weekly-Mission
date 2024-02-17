import FolderLinkAddBar from "components/FolderLinkAddBar";
import LinkSearchBar from "components/LinkSearchBar";
import LinkCardCollection from "components/LinkCardCollection";
import "pages/Folder.css";
import LinkSubFolder from "components/LinkSubFolder";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { acceptDataFromApi } from "Api";

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

export default function Folder() {
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

	return (
		<div>
			<FolderLinkAddBar />
			<main>
				<LinkSearchBar />
				{isEmptyResponse ? (
					<EmptyLink />
				) : (
					<>
						<LinkSubFolder />
						<LinkCardCollection items={items} />
					</>
				)}
			</main>
		</div>
	);
}
