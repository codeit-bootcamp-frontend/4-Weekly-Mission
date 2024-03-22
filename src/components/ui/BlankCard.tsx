import React, { ReactNode } from "react";

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

interface BlankCardPops {
  children: ReactNode;
}

function BlankCard({ children }: BlankCardPops) {
  return (
    <Blank>
      <p>{children}</p>
    </Blank>
  );
}

export default BlankCard;
