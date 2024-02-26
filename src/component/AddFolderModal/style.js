import styled from "styled-components";

export const ModalBackground = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

export const ModalBox = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 1rem;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	width: 360px;
	height: 240px;
	position: relative;

	.ModalX {
		position: absolute;
		top: 1rem;
		right: 1rem;
		width: 24px;
		height: 24px;
		background-color: #e7effb;
		color: #9fa6b2;
		border-radius: 100%;
		&:hover {
			cursor: pointer;
		}
	}

	* {
		width: 100%;
		text-align: center;
	}

	p {
		font-size: 20px;
		font-weight: 700;
	}

	input {
		height: 60px;
		text-align: left;
		border: 1px solid #6d6afe;
		border-radius: 8px;
		padding: 1rem;
	}

	button {
		padding: 16px 20px;
		border: none;
		color: white;
		font-size: 1rem;
		border-radius: 8px;
		background: var(
			--gra-purpleblue-to-skyblue,
			linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
		);

		&:hover {
			cursor: pointer;
		}
	}
`;
