import styled, { css } from "styled-components";
import { StylePropsType } from "typeStore";
interface StyleProps {
  $position: any;
  $isHidden: boolean;
}
export const NotLink = styled.div`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 400;
  flex: 1;
`;
export const CurrentCategory = styled.div`
  max-width: 106rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  @media (max-width: 790px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }
`;
export const GategoryName = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  color: #000;
`;

export const FunctionsBox = styled.div<StylePropsType>`
  display: flex;
  gap: 12px;
  visibility: ${({ $visibility }) =>
    $visibility === "전체" ? "hidden" : "visible"};
`;

export const FunctionBtn = styled.button`
  outline: none;
  background: transparent;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: #9fa6b2;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 3px;
`;

export const OwnerSection = styled.section<StyleProps>`
  padding: 4rem 3.2rem 4rem;
  display: flex;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;
  width: 100%;
  ${({ $position }) =>
    $position ||
    css`
      position: fixed;
      bottom: 0;
      left: 0;
    `}
  visibility : ${({ $isHidden }) => ($isHidden ? "hidden" : "visible")};
`;

export const LinkCardSection = styled.section`
  padding: 4rem 0;
  min-height: 200rem;
`;

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 1124px) {
    padding: 0 3.2rem;
  }
  @media (max-width: 790px) {
    gap: 3.2rem;
  }
`;

export const Wrap = styled.div`
  max-width: 106rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CardList = styled.ul`
  max-width: 106rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  @media (max-width: 1124px) {
    gap: 2rem 2.4rem;
    justify-content: space-between;
  }
  @media (max-width: 790px) {
    justify-content: center;
  }
`;

export const Box = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  visibility: hidden;
`;
