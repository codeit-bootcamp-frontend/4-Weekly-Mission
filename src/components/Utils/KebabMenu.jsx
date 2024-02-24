import { useState } from "react";
import styled from "styled-components";

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

const KebabCancel = styled.button`
	position: fixed;
	top: 0;
	left: 0;
	border: none;
	width: 100vw;
	height: 100vh;
	background-color: transparent;

	&:hover {
		cursor: default;
	}
`;

export default function KebabMenu({ items }) {
	const [kebabMenuPop, setKebabMenuPop] = useState(false);

	const handleKebabBtn = () => {
		setKebabMenuPop(!kebabMenuPop);
	};

	return (
		<div className="kebab-menu-position-origin">
			<button type="button" onClick={handleKebabBtn} className="kebab">
				<img src="kebab.svg" alt="kebabButton" />
			</button>
			{kebabMenuPop && (
				<>
					<KebabDiv>
						{items.map((item) => (
							<KebabButton>{item.name}</KebabButton>
						))}
					</KebabDiv>
					<KebabCancel onClick={handleKebabBtn} />
				</>
			)}
		</div>
	);
}
