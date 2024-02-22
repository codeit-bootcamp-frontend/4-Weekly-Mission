import React from "react";
import styled from "styled-components";

const Blank = styled.div`
  width: 100%;
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
  );
}

export default BlankCard;
