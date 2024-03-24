import styled from "styled-components";

export const OwnerCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const CardInner = styled.div`
  text-align: center;
`;

export const ImgBox = styled.div`
  width: 6rem;
  height: 6rem;
  margin: auto;
`;

export const CardName = styled.span`
  font-size: 1.2rem;
  line-height: 150%;
  margin-top: 1.2rem;
  display: inline-flex;
`;

export const FolderName = styled.strong`
  font-size: 3rem;
  color: #000;
  text-align: center;
  line-height: 1;
`;

export const OwnerImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;
