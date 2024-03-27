import styled from "styled-components";

export const ClassificationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ClassificationButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    width: 32.5rem;
    flex-wrap: wrap;
  }
`;
export const AddFolderButton = styled.button`
  line-height: 1.909rem;
  text-align: center;
  color: #6d6afe;

  @media (max-width: 768px) {
    background-color: var(--primary);
    padding: 0.8rem 2.4rem;
    gap: 2rem;
    color: #fff;
    border-radius: 1.5rem;
    display: inline;
    width: fit-content;
    position: fixed;
    bottom: 10.1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;
