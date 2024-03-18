import styled from "styled-components";

export const SubFolderBtnList = styled.div`
  max-width: 85%;
  flex-wrap: wrap;
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const SubFolderUtilList = styled.div`
  display: flex;
  gap: 12px;
`;

export const SubFolderUtil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    row-gap: 12px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CurrentSubFolder = styled.p`
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;

  @media (max-width: 767px) {
    font-size: 2 rem;
  }
`;

export const Button = styled.button`
  border: none;
  color: var(--LBrary-Gray60);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  align-items: center;
  text-align: center;
  gap: 4px;
  background-color: var(--LBrary-white);

  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const AddFolderButton = styled.button`
  color: var(--LBrary-Primary-color);
	padding: 0;
	border: none;
	text-align: center;
	font-family: Pretendard;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.3px;

	display: flex;
	align-items: center;
	text-align: center;
	gap: 4px;
	background-color: var(--LBrary-white);

	@media (max-width: 767px) {
		position: fixed;
		border: 1px solid var(--LBrary-White);
      left: calc(50% - 77.7px);
		border-radius: 20px;
		bottom: 101px;
		color: var(--LBrary-Gray10);
		text-align: center;
		font-family: Pretendard;
		font-size: 1.6rem;
		font-weight: 500;
		letter-spacing: -0.3px;
		padding: 8px 24px;
		background-color: var(--LBrary-Primary-color);
		z-index: 1;
	}
	}
`;

export const AddImage = styled.div`
  background-image: url("add.svg");
  width: 16px;
  height: 16px;

  @media (max-width: 767px) {
    background-image: url("addwhite.svg");
  }
`;

export const SubFolderBtn = styled.button<{ $state: boolean }>`
  color: var(--LBrary-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 5px;
  border: 1px solid var(--LBrary-Primary-color);
  padding: 8px 12px;

  display: flex;
  align-items: center;
  text-align: center;
  gap: 4px;
  background-color: ${({ $state }) =>
    $state === true ? `var(--LBrary-Primary-color)` : `var(--LBrary-white);`};
  color: ${({ $state }) =>
    $state === true ? `var(--LBrary-White);` : `var(--LBrary-Black);`};

  @media (max-width: 1124px) {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export const EmptySpace = styled.div`
  color: var(--LBrary-Black);
  padding: 41px 0 35px;
  margin: 0 auto;
  height: calc(100vh - 738px);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 1124px) {
    height: calc(100vh - 782px);
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;
