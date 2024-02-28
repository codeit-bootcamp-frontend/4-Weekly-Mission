import styled from 'styled-components';

/* 모달 */

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);

  z-index: 5;
`;

export const ModalContainer = styled.div`
  position: relative;

  width: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  padding: 32px 40px;

  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20);
  background: var(--Linkbrary-white);
`;

export const ModalTitle = styled.div`
  color: var(--Linkbrary-gray100);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ModaInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  padding: 18px 15px;

  border-radius: 8px;
  border: 1px solid var(--Linkbrary-primary-color);

  color: var(--Linkbrary-gray100);

  /* Linkbrary/body1-regular */

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const ModalMessage = styled.div`
  text-align: center;

  color: var(--Linkbrary-gray60);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

export const ModalCloseButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 24px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;
`;

/* 모달 공유 링크 */

export const ModalShareContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

export const ModalShareIconBox = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const ModalShareIcon = styled.img`
  width: 42px;
  height: 42px;
`;

export const ModalShareIconName = styled.div`
  color: var(--Linkbrary-gray100, #373740);
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 115.385% */
`;

/* 모달 리스트 */

export const ModalListContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;

  border-radius: 8px;

  color: var(--Linkbrary-gray100, #373740);

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const ModalListContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ModalListName = styled.div`
  color: var(--Linkbrary-gray100, #373740);

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const ModalListNumber = styled.div`
  color: var(--Linkbrary-gray60, #9fa6b2);
  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ModalListCheck = styled.img`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
`;
