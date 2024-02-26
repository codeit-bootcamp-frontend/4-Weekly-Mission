import styled from "styled-components";
import AppFooter from "../common/AppFooter";
import AppNav from "../common/AppNav";
import { AddLinkBar } from "./AddLinkBar";
export function FolderNoLink() {
  return (
    <>
      <AppNav userInfo={"#"} />
      <AddLinkBar />
      <NoLinkContainer>저장된 링크가 없습니다</NoLinkContainer>
      <AppFooter />
    </>
  );
}
const NoLinkContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1060px;
  height: 100px;
  padding: 41px 0px 35px 0px;
  justify-content: center;
  align-items: center;

  @media (max-width: 390px) {
    display: flex;
    height: 100px;
    padding: 0px 97.5px 0px 98.5px;
    justify-content: center;
    align-items: center;
  }
`;
