import styled from "styled-components";

const AddLinkButton = styled.button`
  display: flex;
  width: 80px;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );

  border: none;
  color: white;

  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 14px;
`;

export default AddLinkButton;
