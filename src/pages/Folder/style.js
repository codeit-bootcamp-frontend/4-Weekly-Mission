import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	padding: 0 3rem;
	max-width: 1180px;
	width: 100%;
	margin: 0 auto;

	& p.noLinks {
		padding: 40px 0;
	}
`;

export const FolderName = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.5rem;
	font-weight: 600;
`;
