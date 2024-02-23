import React from "react";
import styled from "styled-components";

const NoLinkContainer = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-align: center;

  padding: 5%;
`;

const NoLink = () => {
  return <NoLinkContainer>저장된 링크가 없습니다</NoLinkContainer>;
};

export default NoLink;
