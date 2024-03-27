import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
`;

export const ItemsP = styled.p`
  color: #9fa6b2;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 100%;
`;

export const DeleteButton = styled.button`
  background: #ff5b56;
  border-radius: 0.8rem;
  border: none;
  color: #f5f5f5;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.8rem 1.5rem;
  width: 100%;
  height: 5.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
