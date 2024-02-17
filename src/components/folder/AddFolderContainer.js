import styled from "styled-components";

const AddFolderContainer = styled.a`
  display: flex;
  gap: 4px;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  @media (max-width: 390px) {
    position: absolute;
    bottom: 101px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    border-radius: 20px;
    border: 1px solid #fff;
    background: #6d6afe;
    color: #e7effb;
    display: flex;
    padding: 8px 24px;
    align-items: flex-start;
    gap: 10px;
  }
`;
export default AddFolderContainer;
