import { BaseModalProps } from "interface/ModalProp";
import styled from "styled-components";

export const CloseButtonModal = styled.button`
  color: var(--gray60);
  background-color: var(--gray10);
  border-radius: 5rem;
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

export function ModalCloseButton({ handleModalClose }: BaseModalProps) {
  return (
    <CloseButtonModal type="button" onClick={handleModalClose}>
      X
    </CloseButtonModal>
  );
}
