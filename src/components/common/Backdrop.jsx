import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
`;

function Backdrop({ isClose }) {
  return <Container onClick={isClose}></Container>;
}

export default Backdrop;
