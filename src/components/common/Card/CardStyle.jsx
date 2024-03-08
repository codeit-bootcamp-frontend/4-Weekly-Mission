import styled from "styled-components";

export const Container = styled.div`
  width: 340px;
  height: 334px;
  flex-shrink: 0;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
`;

export const Image = styled.img`
  width: 340px;
  height: 253.746px;
  flex-shrink: 0;
`;

export const Box = styled.div`
  display: flex;
  width: 340px;
  padding: 15px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 0px 0px 15px 15px;
  background: #fff;
`;

export const Time = styled.div`
  color: #666;

  /* Linkbrary/caption */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Content = styled.p`
  height: 49px;
  align-self: stretch;

  overflow: hidden;
  color: #000;

  text-overflow: ellipsis;
  white-space: nowrap;
  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const Date = styled.div`
  height: 19px;
  align-self: stretch;
  overflow: hidden;
  color: #333;

  text-overflow: ellipsis;
  white-space: nowrap;
  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
