import styled from "styled-components";

export const LinkBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--light-blue);
  @media (min-width: 768px) {
    padding: 6rem 3.25rem 9rem;
  }

  @media (min-width: 1200px) {
    padding: 6rem 32rem 9rem;
  }
`;

export const Item = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const LinkIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 5.3rem;
  padding-left: 3.8rem;
  padding-right: 1.6rem;
  border-radius: 1.5rem;
  background-color: var(--white);
  border: 1px solid var(--primary);

  ::placeholder {
    color: var(--gray60);
  }

  @media (min-width: 768px) {
    height: 6.9rem;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  width: 8rem;
  padding: 1rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--gray-light);

  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;
