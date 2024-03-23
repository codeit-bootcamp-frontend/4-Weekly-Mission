import styled from "styled-components";
import type { ChildrenProp } from "interface/ChildrenProp";

export const ContainerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border-radius: 1.5rem;
  border: 0.1rem solid var(--gray20);
  padding: 3.2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  z-index: 2;
`;

export function ModalContainer({ children }: ChildrenProp) {
  return <ContainerModal>{children}</ContainerModal>;
}
