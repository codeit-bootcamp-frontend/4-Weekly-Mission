import React from "react";
import FolderOption from "./FolderOption";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

function FolderTitleArea({ title }) {
  return (
    <Layout>
      <h2>{title}</h2>
      <FolderOption />
    </Layout>
  );
}

export default FolderTitleArea;
