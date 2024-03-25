import styled from 'styled-components';

interface ModalProps {
  $isSelect: boolean;
}

export const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  z-index: 999;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18.5rem;
  border: 1px solid var(--Stroke-light);
  background-color: #ffffff;
  border-radius: 0.9375rem;
  padding: 2rem 2.5rem;
  text-align: center;
`;

export const ModalCloseIcon = styled.img`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

export const ModalTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--Linkbrary-gray100);
`;

export const ModalSubTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: var(--Linkbrary-gray60);
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const ModalButton = styled.button`
  width: 17.5rem;
  height: 3.1875rem;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  color: var(--Grey-Light);
  font-weight: 600;
`;

export const ModalButtonBlue = styled(ModalButton)`
  background: var(--gra-purpleblue-to-skyblue);
`;

export const ModalButtonRed = styled(ModalButton)`
  background: var(--Linkbrary-red);
  margin-top: 1.5rem;
`;

export const ModalInput = styled.input`
  width: 15.5rem;
  height: 1rem;
  padding: 1.125rem 0.9375rem;
  border-radius: 0.5rem;
  background: var(--Linkbrary-white, #fff);
  border: 1px solid var(--gray20);
  margin: 1.5rem 0 0.94rem;
  outline: none;

  &:focus {
    border: 1px solid var(--Linkbrary-primary-color);
  }
`;

export const ModalLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`;

export const ModalShareBox = styled.ul`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const ModalShareIconBox = styled.div`
  border-radius: 2.33331rem;
  padding: 0.75rem;
`;

export const ModalShareText = styled.p`
  font-size: 0.8125rem;
  line-height: 0.9375rem;
  margin-top: 0.62rem;
`;

export const ModalCategory = styled.ul`
  width: 17.5rem;
  margin: 1.5rem auto;
`;

export const ModalCategoryList = styled.li<ModalProps>`
  text-align: left;
  align-items: center;
  line-height: 2rem;
  height: 2rem;
  color: ${({ $isSelect }) => ($isSelect ? '#6d6afe' : '#373740')};
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ $isSelect }) => ($isSelect ? '#F0F6FF' : '#FFFFFF')};
`;

export const ModalCategoryCount = styled.span`
  font-size: 0.875rem;
  color: var(--Linkbrary-gray60);
  margin-left: 0.5rem;
`;

export const ModalCategorySelectImg = styled.img`
  float: right;
  padding-top: 0.35rem;
`;
