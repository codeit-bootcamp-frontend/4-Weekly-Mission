import styled from "styled-components";

export const ModalBox = styled.div`
  display: flex;
  gap: 3.2rem;

  color: var(--lb-gray100, #373740);
  text-align: center;
  font-family: Inter;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 115.385% */
`;

const BackgroundColorList: any = {
  kakao: "#fee500",
  facebook: "#1877f2",
  link: "rgba(157, 157, 157, 0.04)",
};

export const ShareButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ShareTypeButton = styled.button<{ $shareType: string }>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 4.2rem;
  width: 4.2rem;
  margin-bottom: 1rem;

  background-color: ${({ $shareType }) => BackgroundColorList[$shareType]};
`;
