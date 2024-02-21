import React from "react";
import styled from "styled-components";

const NoLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 11.7rem 0;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;

const NoLink = () => {
  return <NoLinkContainer>저장된 링크가 없습니다</NoLinkContainer>;
};

export default NoLink;
