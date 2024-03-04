import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 1rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.5rem;

  background: ${({ type }) =>
    type === "primary"
      ? "linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)"
      : "var(--Linkbrary-red, #FF5B56)"};

  border: none;

  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
