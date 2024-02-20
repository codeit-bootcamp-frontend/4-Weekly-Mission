import FolderLinkAddBar from "components/FolderLinkAddBar";
import "pages/Folder.css";
import LinkSubFolder from "components/LinkSubFolder";
import HeadNav from "components/HeadNav";
import styled from "styled-components";

const StyledHeadNav = styled(HeadNav)`
	position: relative;
`;

export default function Folder() {
	return (
		<>
			<StyledHeadNav />
			<div>
				<FolderLinkAddBar />
				<main>
					<LinkSubFolder />
				</main>
			</div>
		</>
	);
}
