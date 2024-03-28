import styled, { keyframes } from "styled-components";

export const LinkImage = styled.div`
	background-image: url("${(props) => props["data-image"]}");
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	height: 200px;
	border-radius: 1rem 1rem 0 0;
	transition: background-size 0.3s ease-in-out;
	margin-bottom: 1rem;
	position: relative;

	&:hover {
		background-size: 130%;
	}
`;

const LoadingGlow = keyframes`
50% {
  opacity: 0.5;
}
`;

export const LoadingAnimation = styled.div`
	animation: ${LoadingGlow} 2s ease-in-out infinite;
`;

export const LinkImageLoading = styled.div`
	height: 200px;
	background-color: #dbdbdb;
	border-radius: 1rem 1rem 0 0;
`;

export const LinkLoading = styled.div`
	width: 200px;
	height: 1.25rem;
	border-radius: 4px;
	background-color: #dbdbdb;
	margin: 1rem;
`;

export const StarButton = styled.img`
	position: absolute;
	top: 1rem;
	right: 1rem;
`;
