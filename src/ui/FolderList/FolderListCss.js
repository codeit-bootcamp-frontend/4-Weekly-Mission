import styled from "styled-components";

export const FolderNameList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 106rem;
  height: auto;
`;

export const FolderButtonWrapper = styled.div`
  width: 90%;
`;

export const FolderButton = styled.button`
  display: inline-block;
  border: 1px solid #6d6afe;
  border-radius: 5px;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.6rem;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;

  @media screen and (max-width: 767px) {
    width: 100%;
    position: fixed;
    bottom: 101px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  height: 2.6rem;
  color: #6d6afe;
  padding: 0.5rem 2rem;
  border-radius: 9999px;
  min-width: 10.5rem;

  @media screen and (max-width: 767px) {
    color: #fff;
    background-color: #6d6afe;
  }
`;

export const FolderNameBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 106rem;
  justify-content: space-between;
`

export const NameContainer = styled.div`
  display: flex;
`

export const Name = styled.span`
  font-size: 3rem;
  font-weight: bold;
`

export const BlankDiv = styled.div`
`
export const ButtonBar = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
    color: gray;
    margin-left: 1rem;
`

export const ButtonText = styled.span`
margin-left: 4px;
`


