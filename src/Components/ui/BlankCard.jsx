import React from "react";
<<<<<<< HEAD
import styled from "styled-components";

const Blank = styled.div`
  width: 100%;
  min-height: 400px;
  text-align: center;
  padding: 41px 0 35px 0;
  margin: 0 auto;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

function BlankCard({ children }) {
  return (
    <Blank>
      <p>{children}</p>
    </Blank>
=======
import Wrapper from "../common/layout/Wrapper";

function BlankCard() {
  return (
    <>
      <p>저장된 링크가 없습니다.</p>
    </>
>>>>>>> part2-윤병현
  );
}

export default BlankCard;
