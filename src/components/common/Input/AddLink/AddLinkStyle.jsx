import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  color: var(--Linkbrary-gray60, #9fa6b2);
  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
