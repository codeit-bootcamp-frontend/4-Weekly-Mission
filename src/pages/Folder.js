import FolderLinkAddBar from "components/FolderLinkAddBar";
import LinkSearchBar from "components/LinkSearchBar";
import LinkCardCollection from "components/LinkCardCollection";
import "pages/Folder.css";
import LinkSubFolder from "components/LinkSubFolder";
import styled from "styled-components";

const EmptySpace = styled.div`
	color: var(--LBrary-Black);
	padding: 41px 0 35px;
	margin: 0 auto 100px;
	text-align: center;
	font-family: Pretendard;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
`;

const EmptyLink = function () {
	return <EmptySpace>저장된 링크가 없습니다.</EmptySpace>;
};

export default function Folder() {
	const isEmptyResponse = false; // 추후 api 수정 필요
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
						<LinkCardCollection />
					</>
				)}
			</main>
		</div>
	);
}
