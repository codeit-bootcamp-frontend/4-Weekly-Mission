import styled from "styled-components";

const Button = styled.button`
  display: none;
  position: fixed;
  bottom: 101px;
  right: 50%;
  transform: translate(50%, 50%);
  background-color: #6d6afe;
  color: white;
  border: none;
  width: 128px;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    display: block;
  }
`;

const MobileAddFolderButton = () => {
  return <Button>폴더 추가 +</Button>;
};

export default MobileAddFolderButton;
