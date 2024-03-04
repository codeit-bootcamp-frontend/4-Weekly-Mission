import styled from "styled-components";

export const Container = styled.div`
  width: 22.5rem;
  height: 14.9375rem;
  flex-shrink: 0;

  display: inline-flex;
  padding: 2rem 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  border-radius: 0.9375rem;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);

  .title {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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
