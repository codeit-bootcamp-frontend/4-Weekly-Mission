import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CategoryBarBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const CategoryBtn = styled(NavLink)`
  display: inline-block;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background-color: #fff;
  cursor: pointer;
  font-size: 1.6rem;
  color: #000;
  font-weight: 400;
  user-select: none;
  &.active {
    color: #fff;
    background-color: #6d6afe;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const AddFolderBtn = styled.button`
  outline: none;
  border: none;
  color: #6d6afe;
  font-size: 1.6rem;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 1040px) {
    display: none;
  }
`;
