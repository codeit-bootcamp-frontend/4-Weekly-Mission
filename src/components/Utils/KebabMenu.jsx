import styled from "styled-components";

export default function KebabMenu({ items }) {
	const KebabDiv = styled.div`
		position: absolute;
		flex-direction: column;
		align-items: flex-start;
		top: 16px;
		gap: 4px;
		box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

		z-index: 1;
	`;

	const KebabButton = styled.button`
		color: var(--LBrary-Gray100);
		font-family: Pretendard;
		background-color: var(--LBrary-White);
		border: none;
		width: 100px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		font-size: 1.4rem;
		background-color: ;
		padding: 7px 12px;
		text-align: center;

		&:hover {
			color: var(--LBrary-Primary-color);
			background-color: var(--LBrary-Gray10);
		}
	`;

	return (
		<>
			<KebabDiv>
				{items.map((item) => (
					<KebabButton>{item.name}</KebabButton>
				))}
			</KebabDiv>
			{/* <KebabCansle setKebabStatus={setKebabStatus} /> */}
		</>
	);
}
