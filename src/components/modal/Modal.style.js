import styled from "styled-components";

export const Container = styled.div`
  width: 22.5rem;
  height: 14.9375rem;
  flex-shrink: 0;

  display: flex;
  padding: 1rem 1rem 2.5rem 2.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 0rem;

  border-radius: 0.9375rem;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;

    .title {
      color: var(--Linkbrary-gray100, #373740);
      font-family: Pretendard;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .close {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Input = styled.input`
  display: flex;
  width: 90%;
  padding: 1.125rem 0.9375rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);

  &:focus {
    outline: none;
    border-radius: 0.5rem;
    border: red 1px solid;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);
  }
`;
